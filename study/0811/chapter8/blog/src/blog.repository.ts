// blog.repository.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { PostDto } from './blog.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog, BlogDocument } from './blog.schema';
import { v4 as uuidv4 } from 'uuid'; // ID 생성을 위해 uuid 패키지 설치 필요

// [수정] 인터페이스: 모든 메서드가 Promise를 반환하고, 생성/수정 시 결과 객체를 반환하도록 수정
export interface BlogRepository {
  getAllPost(): Promise<PostDto[]>;
  createPost(postDto: PostDto): Promise<PostDto>;
  getPost(id: string): Promise<PostDto>;
  deletePost(id: string): Promise<void>;
  updatePost(id: string, postDto: PostDto): Promise<PostDto>;
}

// --- 파일 기반 Repository ---
@Injectable()
export class BlogFileRepository implements BlogRepository {
  private FILE_NAME = './src/blog.data.json';

  // [추가] 파일을 읽어오는 로직을 별도 private 메서드로 분리 (중복 제거)
  private async _getPostsFromFile(): Promise<PostDto[]> {
    try {
      const data = await readFile(this.FILE_NAME, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      // 파일이 없거나 비어있을 경우 빈 배열 반환
      return [];
    }
  }

  async getAllPost(): Promise<PostDto[]> {
    return this._getPostsFromFile();
  }

  async createPost(postDto: PostDto): Promise<PostDto> {
    const posts = await this._getPostsFromFile();

    // [수정] ID 생성 버그 수정: uuid를 사용하여 고유 ID 생성
    const newPost: PostDto = {
      id: uuidv4(), // 고유 ID
      ...postDto,
      createdDt: new Date(),
      updatedDt: new Date(),
    };

    posts.push(newPost);
    await writeFile(this.FILE_NAME, JSON.stringify(posts, null, 2)); // JSON 포맷팅 추가
    return newPost; // 생성된 객체 반환
  }

  async getPost(id: string): Promise<PostDto> {
    const posts = await this._getPostsFromFile();
    const post = posts.find((p) => p.id === id);

    // [수정] 게시글이 없을 경우 404 에러 발생
    if (!post) {
      throw new NotFoundException(`Post with ID "${id}" not found`);
    }
    return post;
  }

  async deletePost(id: string): Promise<void> {
    const posts = await this._getPostsFromFile();
    const filteredPosts = posts.filter((p) => p.id !== id);

    if (posts.length === filteredPosts.length) {
      throw new NotFoundException(`Post with ID "${id}" not found`);
    }

    await writeFile(this.FILE_NAME, JSON.stringify(filteredPosts, null, 2));
  }

  async updatePost(id: string, postDto: PostDto): Promise<PostDto> {
    const posts = await this._getPostsFromFile();
    const postIndex = posts.findIndex((p) => p.id === id);

    if (postIndex === -1) {
      throw new NotFoundException(`Post with ID "${id}" not found`);
    }

    // [수정] 기존 데이터를 유지하며 업데이트 (id, createdDt 등)
    const updatedPost: PostDto = {
      ...posts[postIndex],
      ...postDto,
      updatedDt: new Date(),
    };

    posts[postIndex] = updatedPost;
    await writeFile(this.FILE_NAME, JSON.stringify(posts, null, 2));
    return updatedPost; // 수정된 객체 반환
  }
}

// --- MongoDB 기반 Repository ---
@Injectable()
export class BlogMongoRepository implements BlogRepository {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async getAllPost(): Promise<PostDto[]> {
    // [수정] .lean()을 사용하여 순수 객체(PostDto와 호환)를 반환하도록 수정
    return this.blogModel.find().lean().exec();
  }

  async createPost(postDto: PostDto): Promise<PostDto> {
    // [수정] await으로 생성 작업을 기다리고, 생성된 document를 반환
    // Schema의 timestamps 옵션 덕분에 날짜는 자동 관리됨
    const newPost = await this.blogModel.create(postDto);
    return (newPost as any).toObject(); // DTO로 변환하여 반환
  }

  async getPost(id: string): Promise<PostDto> {
    // [수정] orFail()로 데이터가 없을 시 자동으로 에러 발생, lean()으로 객체 반환
    return this.blogModel.findById(id).orFail().lean().exec();
  }

  async deletePost(id: string): Promise<void> {
    // [수정] orFail()로 삭제할 대상이 있는지 확인
    await this.blogModel.findByIdAndDelete(id).orFail().exec();
  }

  async updatePost(id: string, postDto: PostDto): Promise<PostDto> {
    // [수정] { new: true } 옵션으로 업데이트 후의 최신 데이터를 반환받음
    const updatedPost = await this.blogModel
      .findByIdAndUpdate(id, postDto, { new: true })
      .orFail()
      .lean()
      .exec();

    return updatedPost;
  }
}

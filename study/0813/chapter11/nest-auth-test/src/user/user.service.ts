import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable() // ❶ DI를 위한 데코레이터
export class UserService {
  // ❷ 리포지터리 주입
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // ❸ 유저 생성
  createUser(user): Promise<User> {
    console.log(user);
    return this.userRepository.save(user);
  }

  // ❹ 한 명의 유저 정보 찾기
  async getUser(email: string) {
    const result = await this.userRepository.findOne({
      where: { email },
    });
    return result;
  }

  // ❺ 유저 정보 업데이트. username과 password만 변경
  async updateUser(email, _user) {
    const user: User = await this.getUser(email);
    console.log(_user);
    user.username = _user.username;
    user.password = _user.password;
    console.log(user);
    this.userRepository.save(user);
  }

  // ❻ 유저 정보 삭제
  deleteUser(email: any) {
    return this.userRepository.delete({ email });
  }

  async findByEmailOrSave(email, username, providerId): Promise<User> {
    const foundUser = await this.getUser(email);
    if (foundUser) {
      return foundUser;
    }

    const newUser = await this.userRepository.save({
      email,
      username,
      providerId,
    });
    return newUser;
  }
}

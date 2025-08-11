// blog.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogDocument = Blog & Document;

// [수정] Schema 옵션 추가: timestamps, _id
@Schema({
  timestamps: { createdAt: 'createdDt', updatedAt: 'updatedDt' }, // createdDt, updatedDt 자동 관리
  _id: true, // Mongoose 기본 _id 사용 명시
})
export class Blog {
  // [삭제] Mongoose의 기본 `_id`를 사용하므로 별도의 id 필드는 필요 없습니다.
  // @Prop()
  // id: string;

  @Prop({ required: true }) // 필수 필드 옵션 추가
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  name: string;

  // [수정] timestamps 옵션으로 자동 생성되므로 명시적 선언이 필요 없습니다.
  // Mongoose가 자동으로 관리합니다.
  createdDt: Date;
  updatedDt: Date;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);

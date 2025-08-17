import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // sqlite 설정 메서드
      type: 'sqlite', // ❶ 데이터베이스의 타입
      database: 'nest-auth-test.sqlite', // ❷ 데이터베이스 파일명
      entities: [User], // ❸ 엔티티 리스트
      synchronize: true, // ❹ 데이터베이스에 스키마를 동기화
      logging: true, // ❺ SQL 실행 로그 확인
    }),
    UserModule,
    AuthModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

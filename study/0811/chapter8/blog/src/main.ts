import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

// bootstrap()이 반환하는 Promise를 .catch()로 처리하여 오류 발생 시 로그를 남깁니다.
bootstrap().catch((err) => {
  console.error('Error during application bootstrap', err);
  process.exit(1);
});

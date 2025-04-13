import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { setupSwagger } from './infrastructure/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true, // that means that the input will be transformed to the instance of the DTO
      forbidNonWhitelisted: false,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.enableCors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'], // Cho phép cả localhost và 127.0.0.1
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Nếu dùng cookie, JWT trong header
  });

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // ✅ Setup Swagger
  const port = parseInt(process.env.PORT ?? '3001', 10);
  if (process.env.NODE_ENV !== 'production') {
    setupSwagger(app, port);
  }

  await app.listen(port);
  console.log(`🚀 Server running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();

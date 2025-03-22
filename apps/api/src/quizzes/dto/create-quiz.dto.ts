import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  // Quiz có thể liên kết với bài học (lessonId) nếu có
  @IsOptional()
  @IsString()
  lessonId?: string;

  @IsNotEmpty()
  @IsString()
  categoryId: string;
}

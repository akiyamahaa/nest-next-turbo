import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsNotEmpty()
  @IsString()
  quizId: string;

  // ID của đáp án đúng; cần được tạo trước hoặc cập nhật sau
  @IsNotEmpty()
  @IsString()
  correctOptionId: string;
}

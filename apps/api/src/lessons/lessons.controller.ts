// src/lessons/lessons.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { LessonStatus } from '@prisma/client';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  // Endpoint tạo bài học mới (có thể dùng cho admin)
  @Post()
  create(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonsService.create(createLessonDto);
  }

  // Lấy danh sách bài học
  @Get()
  findAll() {
    return this.lessonsService.findAll();
  }

  // Lấy chi tiết bài học theo id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonsService.findOne(id);
  }

  // Cập nhật bài học (có thể dùng cho admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLessonDto: UpdateLessonDto) {
    return this.lessonsService.update(id, updateLessonDto);
  }

  // Xóa bài học (có thể dùng cho admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonsService.remove(id);
  }

  // Cập nhật tiến trình học của người dùng cho một bài học cụ thể
  // Endpoint này được bảo vệ bằng JWT, do đó người dùng phải đăng nhập
  @Patch(':id/progress')
  @UseGuards(JwtAuthGuard)
  updateProgress(
    @Param('id') lessonId: string,
    @Body('status') status: LessonStatus,
    @Request() req,
  ) {
    return this.lessonsService.updateUserProgress(
      req.user.id,
      lessonId,
      status,
    );
  }
}

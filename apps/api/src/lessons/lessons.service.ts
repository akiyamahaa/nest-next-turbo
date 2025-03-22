// src/lessons/lessons.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LessonStatus } from '@prisma/client';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Injectable()
export class LessonsService {
  constructor(private prisma: PrismaService) {}

  async create(createLessonDto: CreateLessonDto) {
    return this.prisma.lesson.create({
      data: createLessonDto,
    });
  }

  async findAll() {
    return this.prisma.lesson.findMany({
      include: { category: true },
    });
  }

  async findOne(id: string) {
    const lesson = await this.prisma.lesson.findUnique({
      where: { id },
      include: {
        category: true,
        quizzes: true,
      },
    });
    if (!lesson) {
      throw new NotFoundException(`Bài học với id ${id} không tồn tại`);
    }
    return lesson;
  }

  async update(id: string, updateLessonDto: UpdateLessonDto) {
    // Kiểm tra tồn tại bài học trước khi cập nhật
    await this.findOne(id);
    return this.prisma.lesson.update({
      where: { id },
      data: updateLessonDto,
    });
  }

  // Xóa bài học
  async remove(id: string) {
    // Kiểm tra tồn tại bài học trước khi xóa
    await this.findOne(id);
    return this.prisma.lesson.delete({
      where: { id },
    });
  }

  // Nếu cần cập nhật tiến trình học của người dùng
  async updateUserProgress(
    userId: string,
    lessonId: string,
    status: LessonStatus,
  ) {
    // Giả sử bạn đã có bảng UserLessonProgress
    return this.prisma.userLessonProgress.upsert({
      where: { userId_lessonId: { userId, lessonId } },
      update: { status },
      create: { userId, lessonId, status },
    });
  }
}

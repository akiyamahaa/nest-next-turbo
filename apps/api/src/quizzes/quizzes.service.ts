import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Injectable()
export class QuizzesService {
  constructor(private prisma: PrismaService) {}

  // Tạo mới Quiz
  async create(createQuizDto: CreateQuizDto) {
    return this.prisma.quiz.create({
      data: createQuizDto,
    });
  }

  // Lấy danh sách Quiz, bao gồm Question và Option
  async findAll() {
    return this.prisma.quiz.findMany({
      include: {
        questions: {
          include: { options: true },
        },
      },
    });
  }

  // Lấy chi tiết Quiz theo id, bao gồm Question và Option
  async findOne(id: string) {
    const quiz = await this.prisma.quiz.findUnique({
      where: { id },
      include: {
        questions: {
          include: { options: true },
        },
      },
    });
    if (!quiz) {
      throw new NotFoundException(`Quiz với id ${id} không tồn tại`);
    }
    return quiz;
  }
}

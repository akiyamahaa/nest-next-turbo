import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}

  // Tạo mới Question
  async create(createQuestionDto: CreateQuestionDto) {
    return this.prisma.question.create({
      data: createQuestionDto,
    });
  }

  // Lấy danh sách tất cả Question, bao gồm Option
  async findAll() {
    return this.prisma.question.findMany({
      include: { options: true },
    });
  }

  // Lấy chi tiết Question theo id, bao gồm Option
  async findOne(id: string) {
    const question = await this.prisma.question.findUnique({
      where: { id },
      include: { options: true },
    });
    if (!question) {
      throw new NotFoundException(`Question với id ${id} không tồn tại`);
    }
    return question;
  }
}

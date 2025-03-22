import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  // Tạo mới Category
  async create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: createCategoryDto,
    });
  }

  // Lấy danh sách tất cả Category, bao gồm các liên kết (nếu cần)
  async findAll() {
    return this.prisma.category.findMany({
      include: {
        lessons: true,
        quizzes: true,
      },
    });
  }

  // Lấy chi tiết 1 Category theo id
  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      include: { lessons: true, quizzes: true },
    });
    if (!category) {
      throw new NotFoundException(`Category với id ${id} không tồn tại`);
    }
    return category;
  }

  // (Tuỳ chọn) Cập nhật Category
  async update(id: string, updateCategoryDto: CreateCategoryDto) {
    await this.findOne(id);
    return this.prisma.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  // (Tuỳ chọn) Xóa Category
  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.category.delete({
      where: { id },
    });
  }
}

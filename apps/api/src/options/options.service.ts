import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOptionDto } from './dto/create-option.dto';

@Injectable()
export class OptionsService {
  constructor(private prisma: PrismaService) {}

  // Tạo Option mới
  async create(createOptionDto: CreateOptionDto) {
    return this.prisma.option.create({
      data: createOptionDto,
    });
  }

  // Lấy danh sách tất cả Option
  async findAll() {
    return this.prisma.option.findMany();
  }

  // Lấy chi tiết Option theo id
  async findOne(id: string) {
    const option = await this.prisma.option.findUnique({ where: { id } });
    if (!option) {
      throw new NotFoundException(`Option với id ${id} không tồn tại`);
    }
    return option;
  }
}

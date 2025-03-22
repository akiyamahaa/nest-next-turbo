import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OptionsService } from './options.service';
import { CreateOptionDto } from './dto/create-option.dto';

@Controller('options')
export class OptionsController {
  constructor(private readonly optionsService: OptionsService) {}

  // POST /options - Tạo mới Option
  @Post()
  create(@Body() createOptionDto: CreateOptionDto) {
    return this.optionsService.create(createOptionDto);
  }

  // GET /options - Lấy danh sách Option
  @Get()
  findAll() {
    return this.optionsService.findAll();
  }

  // GET /options/:id - Lấy chi tiết Option theo id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.optionsService.findOne(id);
  }
}

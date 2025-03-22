import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  // POST /questions - Tạo mới Question
  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.create(createQuestionDto);
  }

  // GET /questions - Lấy danh sách Question
  @Get()
  findAll() {
    return this.questionsService.findAll();
  }

  // GET /questions/:id - Lấy chi tiết Question theo id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionsService.findOne(id);
  }
}

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  // POST /quizzes - Tạo mới Quiz
  @Post()
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizzesService.create(createQuizDto);
  }

  // GET /quizzes - Lấy danh sách Quiz
  @Get()
  findAll() {
    return this.quizzesService.findAll();
  }

  // GET /quizzes/:id - Lấy chi tiết Quiz theo id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizzesService.findOne(id);
  }
}

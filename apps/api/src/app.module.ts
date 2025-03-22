import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { LessonsModule } from './lessons/lessons.module';
import { OptionsModule } from './options/options.module';
import { QuestionsService } from './questions/questions.service';
import { QuestionsController } from './questions/questions.controller';
import { QuestionsModule } from './questions/questions.module';
import { QuizzesService } from './quizzes/quizzes.service';
import { QuizzesController } from './quizzes/quizzes.controller';
import { QuizzesModule } from './quizzes/quizzes.module';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    LessonsModule,
    OptionsModule,
    QuestionsModule,
    QuizzesModule,
    CategoriesModule,
  ],
  controllers: [
    AppController,
    QuestionsController,
    QuizzesController,
    CategoriesController,
  ],
  providers: [
    AppService,
    PrismaService,
    QuestionsService,
    QuizzesService,
    CategoriesService,
  ],
})
export class AppModule {}

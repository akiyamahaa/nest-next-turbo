// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { seedData } from './data'; // Import dữ liệu mẫu từ file data.ts

const prisma = new PrismaClient();

async function main() {
  // Tạo hoặc lấy Category "cờ tập sự"
  const category = await prisma.category.upsert({
    where: { name: seedData.categoryName },
    update: {},
    create: { name: seedData.categoryName },
  });
  console.log('Category created:', category);

  // Lặp qua từng Quiz trong dữ liệu mẫu
  for (const quizData of seedData.quizzes) {
    const quiz = await prisma.quiz.create({
      data: {
        title: quizData.title,
        description: quizData.description,
        categoryId: category.id,
      },
    });
    console.log(`Quiz created: ${quiz.title}`);

    // Lặp qua từng Question của Quiz
    for (const questionData of quizData.questions) {
      // Tạo Question kèm theo Options sử dụng nested write
      const question = await prisma.question.create({
        data: {
          text: questionData.text,
          imageUrl: questionData.imageUrl,
          quizId: quiz.id,
          options: {
            create: questionData.options.map((opt) => ({
              label: opt.label,
              text: opt.text,
              explanation: opt.explanation,
            })),
          },
        },
        include: { options: true },
      });
      console.log(`Question created: ${question.text}`);

      // Tìm Option đúng dựa trên label được định nghĩa trong dữ liệu mẫu
      const correctOption = question.options.find(
        (opt) => opt.label === questionData.correctOptionLabel,
      );
      if (correctOption) {
        await prisma.question.update({
          where: { id: question.id },
          data: { correctOptionId: correctOption.id },
        });
        console.log(`Updated correctOptionId for question: ${question.text}`);
      }
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

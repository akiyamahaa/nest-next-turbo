-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_correctOptionId_fkey";

-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "correctOptionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_correctOptionId_fkey" FOREIGN KEY ("correctOptionId") REFERENCES "Option"("id") ON DELETE SET NULL ON UPDATE CASCADE;

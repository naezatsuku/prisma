/*
  Warnings:

  - You are about to drop the `TimeTable` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TimeTable";

-- CreateTable
CREATE TABLE "Outline" (
    "id" SERIAL NOT NULL,
    "className" TEXT NOT NULL,
    "time" INTEGER NOT NULL,

    CONSTRAINT "Outline_pkey" PRIMARY KEY ("id")
);

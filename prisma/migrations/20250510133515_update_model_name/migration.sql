/*
  Warnings:

  - You are about to drop the `Outline` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Outline";

-- CreateTable
CREATE TABLE "TimeTable" (
    "id" SERIAL NOT NULL,
    "className" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "TimeTable_pkey" PRIMARY KEY ("id")
);

/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Outline" (
    "id" SERIAL NOT NULL,
    "className" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "Outline_pkey" PRIMARY KEY ("id")
);

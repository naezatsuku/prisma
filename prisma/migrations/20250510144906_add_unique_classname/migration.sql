/*
  Warnings:

  - A unique constraint covering the columns `[className]` on the table `Outline` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Outline_className_key" ON "Outline"("className");

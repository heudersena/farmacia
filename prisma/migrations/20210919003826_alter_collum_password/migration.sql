/*
  Warnings:

  - You are about to drop the column `passoword` on the `users` table. All the data in the column will be lost.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `users_passoword_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `passoword`,
    ADD COLUMN `password` VARCHAR(100) NOT NULL;

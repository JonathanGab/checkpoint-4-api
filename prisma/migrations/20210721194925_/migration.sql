/*
  Warnings:

  - You are about to drop the `RoyalFamily` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `RoyalFamily`;

-- CreateTable
CREATE TABLE `royalFamily` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `avatar` VARCHAR(255),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

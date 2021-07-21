-- AlterTable
ALTER TABLE `RoyalFamily` ADD COLUMN `avatar` VARCHAR(255);

-- CreateTable
CREATE TABLE `contact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `review` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

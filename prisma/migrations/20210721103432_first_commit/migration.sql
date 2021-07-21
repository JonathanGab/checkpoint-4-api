-- CreateTable
CREATE TABLE `assets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `weapon` VARCHAR(255) NOT NULL,
    `price` INTEGER NOT NULL,
    `weaponImage` VARCHAR(255) NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoyalFamily` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

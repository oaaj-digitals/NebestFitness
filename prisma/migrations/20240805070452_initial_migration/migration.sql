-- CreateTable
CREATE TABLE `AccessToken` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `accesstoken` VARCHAR(191) NOT NULL,
    `token_type` VARCHAR(191) NOT NULL,
    `expires_in` DATETIME(3) NOT NULL,
    `modified_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

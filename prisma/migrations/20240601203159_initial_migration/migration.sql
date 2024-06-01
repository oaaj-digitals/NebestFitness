-- CreateTable
CREATE TABLE `AccessToken` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `accesstoken` VARCHAR(191) NOT NULL,
    `token_type` VARCHAR(191) NOT NULL,
    `expires_in` INTEGER NOT NULL,
    `modified_at` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

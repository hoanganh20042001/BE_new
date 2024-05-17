"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addImageInNews1714188741013 = void 0;
class addImageInNews1714188741013 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE `news` ADD  `image` TEXT NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE `news` DROP COLUMN  `image`');
    }
}
exports.addImageInNews1714188741013 = addImageInNews1714188741013;
//# sourceMappingURL=1714188741013-addImageInNews.js.map
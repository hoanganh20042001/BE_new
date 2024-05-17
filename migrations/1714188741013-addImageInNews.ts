import {MigrationInterface, QueryRunner} from "typeorm";

export class addImageInNews1714188741013 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `news` ADD  `image` TEXT NULL');
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `news` DROP COLUMN  `image`');
    }

}

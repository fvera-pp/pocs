import { MigrationInterface, QueryRunner } from "typeorm"

export class TestMigration1661857921425 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
console.log('up')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

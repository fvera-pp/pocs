import { MigrationInterface, QueryRunner } from "typeorm"

export class newMigration1661854637250 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        console.log('migration')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

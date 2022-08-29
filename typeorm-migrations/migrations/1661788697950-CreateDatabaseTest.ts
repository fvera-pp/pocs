import { MigrationInterface, QueryRunner, Table } from 'typeorm';
const test = new Table({
    name: 'tests2',
    columns:[
        {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
        }
    ]
})
export class CreateDatabaseTest1661788697950 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        console.log('creating table')
        await queryRunner.createTable(test, true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(test)
    }

}

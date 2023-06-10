import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateTable1686390420453 implements MigrationInterface {
  name = 'UpdateTable1686390420453';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "PEOPLE" ADD "year_of_attendance" character varying(10) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "TEAM" ADD "year_of_attendance" character varying(10) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "TEAM" DROP COLUMN "year_of_attendance"`,
    );
    await queryRunner.query(
      `ALTER TABLE "PEOPLE" DROP COLUMN "year_of_attendance"`,
    );
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTable1686384625768 implements MigrationInterface {
  name = 'CreateTable1686384625768';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "PEOPLE" ("id" character varying(36) NOT NULL, "country" character varying(100) NOT NULL, "team_id" character varying(100), "date_of_birth" character varying, "jod" character varying(100), "name" character varying(100) NOT NULL, "place_of_birth" character varying(100) NOT NULL, "points" integer NOT NULL, CONSTRAINT "PK_67c4aaa3fa0dddc8bd93713b87d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "RACE" ("id" character varying(36) NOT NULL, "name" character varying(1000) NOT NULL, "year" integer, CONSTRAINT "PK_db1d850a954bae0c20cea22dadb" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "RANK" ("id" character varying(36) NOT NULL, "race_id" character varying(100) NOT NULL, "team_id" character varying(100) NOT NULL, "rank" integer, CONSTRAINT "PK_5c5f159dbf9cc256bdad8de71b3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "TEAM" ("id" character varying(36) NOT NULL, "name" character varying(1000) NOT NULL, "base" character varying(100) NOT NULL, "first_team_entry" integer, "chassis" character varying(10), "world_championships" integer, "power_unit" character varying(10), CONSTRAINT "PK_e78fb57a5b1a9ce260135c167cf" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "RANK" ADD CONSTRAINT "FK_970a40c04a289979b977bd2f4e1" FOREIGN KEY ("race_id") REFERENCES "RACE"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "RANK" DROP CONSTRAINT "FK_970a40c04a289979b977bd2f4e1"`,
    );
    await queryRunner.query(`DROP TABLE "TEAM"`);
    await queryRunner.query(`DROP TABLE "RANK"`);
    await queryRunner.query(`DROP TABLE "RACE"`);
    await queryRunner.query(`DROP TABLE "PEOPLE"`);
  }
}

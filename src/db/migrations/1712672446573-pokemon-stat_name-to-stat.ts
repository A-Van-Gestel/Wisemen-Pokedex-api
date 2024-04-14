import { MigrationInterface, QueryRunner } from 'typeorm';

export class PokemonStatNameToStat1712672446573 implements MigrationInterface {
  name = 'PokemonStatNameToStat1712672446573';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "pokemon-stat" RENAME COLUMN "stat_name" TO "stat"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "pokemon-stat" RENAME COLUMN "stat" TO "stat_name"`,
    );
  }
}

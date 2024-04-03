import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1712133232343 implements MigrationInterface {
    name = 'Initial1712133232343'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pokemon-move" ("id" SERIAL NOT NULL, "move" text NOT NULL, CONSTRAINT "PK_65c620f2c0db25e6da12ed5db0e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "move-version-group-detail" ("id" SERIAL NOT NULL, "move_learn_method" text NOT NULL, "version_group" text NOT NULL, "level_learned_at" integer NOT NULL, "moveId" integer, CONSTRAINT "PK_e2cfc4bdd3354921a2c014c9cdc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pokemon-ability" ("id" SERIAL NOT NULL, "ability" text NOT NULL, "is_hidden" boolean NOT NULL, "slot" integer NOT NULL, "pokemonId" integer, CONSTRAINT "PK_749fdd226ddaf2ff36d20dfea04" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pokemon-stat" ("id" SERIAL NOT NULL, "stat_name" text NOT NULL, "base_stat" integer NOT NULL, "effort" integer NOT NULL, "pokemonId" integer, CONSTRAINT "PK_66494c11d04f22593ba850d1644" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pokemon-type" ("id" SERIAL NOT NULL, "type" text NOT NULL, "slot" integer NOT NULL, "pokemonId" integer, CONSTRAINT "PK_770f0df469321c8056dd2244fdf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sprite" ("id" SERIAL NOT NULL, "front_default" text NOT NULL, "front_female" text, "front_shiny" text NOT NULL, "front_shiny_female" text, "back_default" text NOT NULL, "back_female" text, "back_shiny" text NOT NULL, "back_shiny_female" text, CONSTRAINT "PK_0c2ab4b884c704710daa4810b71" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pokemon" ("id" SERIAL NOT NULL, "name" text NOT NULL, "height" integer, "weight" integer, "order" integer, "species" text, "form" text, "type" character varying NOT NULL, "spritesId" integer, CONSTRAINT "REL_564dc39cf04776a8af8602347f" UNIQUE ("spritesId"), CONSTRAINT "PK_0b503db1369f46c43f8da0a6a0a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_cb6852e8b70c44e9e5b0f089ca" ON "pokemon" ("type") `);
        await queryRunner.query(`CREATE TABLE "teams" ("id" SERIAL NOT NULL, "name" text NOT NULL, "pokemons" integer array NOT NULL, CONSTRAINT "PK_7e5523774a38b08a6236d322403" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pokemon_moves_pokemon-move" ("pokemonId" integer NOT NULL, "pokemonMoveId" integer NOT NULL, CONSTRAINT "PK_03bcc53ed420e21aceaed7a4711" PRIMARY KEY ("pokemonId", "pokemonMoveId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_cf6606d9b135fe3b61714aae6a" ON "pokemon_moves_pokemon-move" ("pokemonId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2132d846962e53f7ea9a927a98" ON "pokemon_moves_pokemon-move" ("pokemonMoveId") `);
        await queryRunner.query(`ALTER TABLE "move-version-group-detail" ADD CONSTRAINT "FK_ee7a25982c6cf4452a624bfe5dd" FOREIGN KEY ("moveId") REFERENCES "pokemon-move"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pokemon-ability" ADD CONSTRAINT "FK_0736baad2361ff5e9809715ee51" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pokemon-stat" ADD CONSTRAINT "FK_3e646f4b46d226f5efa9fe7b196" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pokemon-type" ADD CONSTRAINT "FK_a2b9145b9c5f2f63b146fcd3bcc" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pokemon" ADD CONSTRAINT "FK_564dc39cf04776a8af8602347f0" FOREIGN KEY ("spritesId") REFERENCES "sprite"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pokemon_moves_pokemon-move" ADD CONSTRAINT "FK_cf6606d9b135fe3b61714aae6a9" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "pokemon_moves_pokemon-move" ADD CONSTRAINT "FK_2132d846962e53f7ea9a927a98e" FOREIGN KEY ("pokemonMoveId") REFERENCES "pokemon-move"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemon_moves_pokemon-move" DROP CONSTRAINT "FK_2132d846962e53f7ea9a927a98e"`);
        await queryRunner.query(`ALTER TABLE "pokemon_moves_pokemon-move" DROP CONSTRAINT "FK_cf6606d9b135fe3b61714aae6a9"`);
        await queryRunner.query(`ALTER TABLE "pokemon" DROP CONSTRAINT "FK_564dc39cf04776a8af8602347f0"`);
        await queryRunner.query(`ALTER TABLE "pokemon-type" DROP CONSTRAINT "FK_a2b9145b9c5f2f63b146fcd3bcc"`);
        await queryRunner.query(`ALTER TABLE "pokemon-stat" DROP CONSTRAINT "FK_3e646f4b46d226f5efa9fe7b196"`);
        await queryRunner.query(`ALTER TABLE "pokemon-ability" DROP CONSTRAINT "FK_0736baad2361ff5e9809715ee51"`);
        await queryRunner.query(`ALTER TABLE "move-version-group-detail" DROP CONSTRAINT "FK_ee7a25982c6cf4452a624bfe5dd"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2132d846962e53f7ea9a927a98"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cf6606d9b135fe3b61714aae6a"`);
        await queryRunner.query(`DROP TABLE "pokemon_moves_pokemon-move"`);
        await queryRunner.query(`DROP TABLE "teams"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cb6852e8b70c44e9e5b0f089ca"`);
        await queryRunner.query(`DROP TABLE "pokemon"`);
        await queryRunner.query(`DROP TABLE "sprite"`);
        await queryRunner.query(`DROP TABLE "pokemon-type"`);
        await queryRunner.query(`DROP TABLE "pokemon-stat"`);
        await queryRunner.query(`DROP TABLE "pokemon-ability"`);
        await queryRunner.query(`DROP TABLE "move-version-group-detail"`);
        await queryRunner.query(`DROP TABLE "pokemon-move"`);
    }

}

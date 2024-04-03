import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

config();

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [`${process.env.ENTITIES_PATH}/**/*.entity.{ts,js}`],
  seeds: ['dist/db/seeds/**/*.seeder.js'],
  synchronize: true, // TODO: Only for development, should be set to false in production
};

// Used by typeorm-extension seed command
// noinspection JSUnusedGlobalSymbols
export const dataSource = new DataSource(dataSourceOptions);

import { NestFactory } from '@nestjs/core';
import { CommandModule, CommandService } from 'nestjs-command';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: ['error'],
  });

  await app.select(CommandModule).get(CommandService).exec();
  await app.close();
}

void bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});

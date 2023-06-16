import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

import { MainModule } from './main.module';
import { AppNamespace } from './config/env/types/env.types';
import { Namespace } from './config/env/types/env.enum';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  const configService = app.get(ConfigService);
  const logger = new Logger(bootstrap.name);
  const appEnv = configService.get<AppNamespace>(Namespace.APP);

  await app.listen(appEnv.port, () => {
    logger.log(`Listening at http://localhost:${appEnv.port}`);
    logger.log(`Running in ${appEnv.nodeEnv} mode`);
  });
}
bootstrap();

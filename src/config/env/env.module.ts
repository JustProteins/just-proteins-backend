import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { envValidationSchema } from './utils/env.validation';
import { appNamespace } from './namespaces/app.namespace'
import { redisNamespace } from "./namespaces/redis.namespace";
import { postgresNamespace } from "./namespaces/postgres.namespace";
import { pgadminNamespace } from "./namespaces/pgadmin.namespace";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appNamespace, redisNamespace, postgresNamespace, pgadminNamespace],
      validationSchema: envValidationSchema,
      isGlobal: true,
      cache: true,
    }),
  ],
})
export class EnvModule {}

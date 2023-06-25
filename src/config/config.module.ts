import { Module } from '@nestjs/common';

import { EnvModule } from './env/env.module';
import { PrismaModule } from "./prisma/prisma.module";
import { RedisModule } from "./redis/redis.module";

@Module({
  imports: [EnvModule, PrismaModule, RedisModule],
})
export class ConfigModule {}
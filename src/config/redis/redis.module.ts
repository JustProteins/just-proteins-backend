import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { CacheModule } from "@nestjs/cache-manager";

import { RedisClientOptions } from "redis";
import { redisStore } from "cache-manager-redis-yet";

import { RedisNamespace } from "../env/types/env.types";
import { Namespace } from "../env/types/env.enum";

@Module({
    imports: [CacheModule.registerAsync<RedisClientOptions>({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
            const redisEnv = configService.get<RedisNamespace>(Namespace.REDIS);

            const store = await redisStore({
                socket: {
                    host: redisEnv.host,
                    port: redisEnv.port,
                },
            });

            return {
                store
            }
        },
    })]
})
export class RedisModule {}
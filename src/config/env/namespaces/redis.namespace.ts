import { registerAs } from "@nestjs/config";

import { Namespace } from "../types/env.enum";

export const redisNamespace = registerAs(Namespace.REDIS, () => ({
    port: parseInt(process.env.REDIS_PORT),
    host: process.env.REDIS_HOST
}));

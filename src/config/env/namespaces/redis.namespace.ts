import { registerAs } from "@nestjs/config";

import { Namespace } from "../types/env.enum";

export const redisNamespace = registerAs(Namespace.REDIS, () => ({
    redisPort: parseInt(process.env.REDIS_PORT),
    redisHost: process.env.REDIS_HOST
}));

import { registerAs } from "@nestjs/config";

import { Namespace } from "../types/env.enum";

export const postgresNamespace = registerAs(Namespace.POSTGRES, () => ({
    dbName: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT),
    host: process.env.POSTGRES_HOST,
}));

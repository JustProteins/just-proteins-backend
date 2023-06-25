import { registerAs } from "@nestjs/config";

import { Namespace } from "../types/env.enum";

export const postgresNamespace = registerAs(Namespace.POSTGRES, () => ({
    postgresDb: process.env.POSTGRES_DB,
    postgresUser: process.env.POSTGRES_USER,
    postgresPassword: process.env.POSTGRES_PASSWORD,
    postgresPort: parseInt(process.env.POSTGRES_PORT),
    postgresHost: process.env.POSTGRES_HOST,
}));

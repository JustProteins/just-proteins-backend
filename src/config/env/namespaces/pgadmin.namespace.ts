import { registerAs } from "@nestjs/config";

import { Namespace } from "../types/env.enum";

export const pgadminNamespace = registerAs(Namespace.PGADMIN, () => ({
    email: process.env.PGADMIN_EMAIL,
    password: process.env.PGADMIN_PASSWORD,
    port: parseInt(process.env.PGADMIN_PORT),
}));

import { registerAs } from "@nestjs/config";

import { Namespace } from "../types/env.enum";

export const pgadminNamespace = registerAs(Namespace.PGADMIN, () => ({
    pgadminEmail: process.env.PGADMIN_EMAIL,
    pgadminPassword: process.env.PGADMIN_PASSWORD,
    pgadminPort: parseInt(process.env.PGADMIN_PORT),
}));

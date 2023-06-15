import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { appNamespace } from "./namespaces/app.namespace";
import { envValidationSchema } from "./utils/env.validation";

@Module({
    imports: [ConfigModule.forRoot({
        load: [appNamespace],
        validationSchema: envValidationSchema,
        isGlobal: true,
        cache: true
    })],
})
export class EnvModule {}
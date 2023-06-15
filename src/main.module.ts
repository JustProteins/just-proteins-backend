import { Module } from "@nestjs/common";

import { ConfigModule } from "./config/config.module";
import { AppModule } from "./app/app.module";

@Module({
    imports: [
        ConfigModule,
        AppModule
    ]
})
export class MainModule {}
import { registerAs } from '@nestjs/config';

import { Namespace } from '../types/env.enum';

export const appNamespace = registerAs(Namespace.APP, () => ({
  nodeEnv: process.env.NODE_ENV,
  appName: process.env.APP_NAME,
  port: parseInt(process.env.PORT),
}));

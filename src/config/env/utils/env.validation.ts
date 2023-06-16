import * as Joi from 'joi';

import { Environment } from '../types/env.enum';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid(Environment.DEVELOPMENT, Environment.STAGING, Environment.PRODUCTION)
    .default(Environment.DEVELOPMENT)
    .required(),
  PORT: Joi.number().default(3000).required(),
  APP_NAME: Joi.string().required(),
});

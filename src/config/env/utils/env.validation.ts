import * as Joi from 'joi';

import { Environment } from '../types/env.enum';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid(Environment.DEVELOPMENT, Environment.STAGING, Environment.PRODUCTION)
    .default(Environment.DEVELOPMENT)
    .required(),
  PORT: Joi.number().default(3000).required(),
  APP_NAME: Joi.string().required(),
  REDIS_PORT: Joi.number().default(6379).required(),
  REDIS_HOST: Joi.string().required(),
  POSTGRES_DB: Joi.string().required(),
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_PORT: Joi.number().default(5432).required(),
  POSTGRES_HOST: Joi.string().required(),
  PGADMIN_EMAIL: Joi.string().required(),
  PGADMIN_PASSWORD: Joi.string().required(),
  PGADMIN_PORT: Joi.number().default(8080).required(),
  DATABASE_URL: Joi.string().required(),
});

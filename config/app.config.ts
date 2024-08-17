import * as Joi from 'joi';

export default () => ({
  environment: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});

export const validationSchema = Joi.object({
  DATABASE_HOST: Joi.required(),
  DATABASE_PORT: Joi.number().default(5432),
});

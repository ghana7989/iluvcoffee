import { registerAs } from '@nestjs/config';

export default registerAs('coffees', () => ({
  environment: process.env.NODE_ENV || 'development',
  database: {
    host: 'lol',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
}));

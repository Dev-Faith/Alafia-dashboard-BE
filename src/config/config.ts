import { z } from 'zod';
import dotenv from 'dotenv';

// Load environment variables first
dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().default('4000'),
  MONGO_URI: z.string().default('mongodb://localhost:27017/alafia'),
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'http', 'verbose', 'debug']).default('info'),
  JWT_SECRET: z.string().default('default-insecure-secret')
});

// Parse with safe defaults
export const config = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  LOG_LEVEL: process.env.LOG_LEVEL,
  JWT_SECRET: process.env.JWT_SECRET
});

// Warn about insecure defaults
if (config.JWT_SECRET === 'default-insecure-secret') {
  console.warn('⚠️  WARNING: Using default JWT secret. Please set JWT_SECRET in .env for production!');
}
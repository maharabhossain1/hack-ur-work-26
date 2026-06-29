import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  SITE_KEY: z.string().min(8).optional(),
  SITE_LOCK_ENABLED: z.enum(['true', 'false']).optional(),
});

export const env = envSchema.parse(process.env);

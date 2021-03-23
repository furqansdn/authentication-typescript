import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const checkEnv = dotenv.config();

if (checkEnv.error) {
  throw new Error('!! Could not find .env file !!');
}

export const Config = {
  port: process.env.APP_PORT || 8080,
  databaseURL: process.env.DATABASE_URL,
  databaseUsername: process.env.DATABASE_USER || 'username',
  databasePassword: process.env.DATABASE_PASS || 'password',

  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  api: {
    prefix: '/api',
  },
};

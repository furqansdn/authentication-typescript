import 'reflect-metadata'; // untuk menggunakan typedi

import express from 'express';

import { Config } from './config';
import Logger from './loaders/logger';

const startServer = async (): Promise<void> => {
  const app = express();
  const port = Config.port;

  await require('./loaders').default({ expressApp: app });
  app
    .listen(port, () => {
      Logger.info(`
    +++++++++++${process.env.NODE_ENV}+++++++++++++
    🛡️  Server listening on port: ${port} 🛡️
    ++++++++++++++++++++++++++++++++++++
    `);
    })
    .on('error', (err) => {
      Logger.error(err);
      process.exit(1);
    });

  process.on('unhandledRejection', (error, promise) => {
    console.log(
      ' Oh Lord! We forgot to handle a promise rejection here: ',
      promise
    );
    console.log(' The error was: ', error);
  });
};

startServer();

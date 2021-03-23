import express from 'express';
import expressLoader from './express';
import mongooseLoader from './mongoose';
import Logger from './logger';

export default async ({
  expressApp,
}: {
  expressApp: express.Application;
}): Promise<void> => {
  const mongoConnection = await mongooseLoader();
  Logger.info('✌️ DB Loaded Successfully');

  expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};

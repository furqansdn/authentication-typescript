import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Config } from '../config';
import routes from '../api';
import { AppError, HTTPNotFound } from '../utils/appError';
import { error } from 'winston';

// hanya menerima express object
export default ({ app }: { app: express.Application }) => {
  app.get('/status', (req, res) => {
    res.status(200).end();
  });

  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  app.enable('trust proxy');

  app.use(cors());

  app.use(bodyParser.json());

  app.use(Config.api.prefix, routes());

  app.use((req, res) => {
    throw new HTTPNotFound();
  });

  app.use(
    (
      err: any,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      return res
        .status(err.httpCode)
        .json({ message: err.message, stack: err.stack });
    }
  );
};

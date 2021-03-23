import { Container } from 'typedi';
import { Config } from '../config';
import LoggerInstance from './logger';

export default ({
  mongoConnection,
  models,
}: {
  mongoConnection: any;
  models: { name: string; model: any }[];
}) => {
  try {
    models.forEach((m) => {
      Container.set(m.name, m.model);
    });
  } catch (error) {
    LoggerInstance.error('Error on dependency injection loader', error);
    throw error;
  }
};

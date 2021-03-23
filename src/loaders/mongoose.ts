import { Config } from '../config';
import mongoose from 'mongoose';
import { Db } from 'mongodb';

export default async (): Promise<Db | undefined> => {
  try {
    const DB = Config.databaseURL
      ?.replace('<username>', Config.databaseUsername)
      .replace('<password>', Config.databasePassword);

    if (DB) {
      const connection = await mongoose.connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      });
      return connection.connection.db;
    }
    return undefined;
  } catch (error) {
    console.log(error);
  }
};

import mongoose from 'mongoose';
import { Config } from './';

export const connect = async () => {
  try {
    await mongoose.connect(Config.MongoURL, Config.Options);
    if (mongoose.connection.readyState === 1) {
      console.log('Connected to database');
    }
  } catch (error) {
    console.log(error);
    await mongoose.connection.close();
  }
};

connect();

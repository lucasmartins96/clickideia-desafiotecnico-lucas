import mongoose from 'mongoose';
import 'dotenv/config';
import { dbConfig } from '../config';

const { host, name, password, port, user } = dbConfig;

const MONGO_DB_URL = `mongodb://${user}:${password}@${host}:${port}/${name}?retryWrites=true&w=majority&authSource=admin`;

const connectToDatabase = (mongoDatabaseURI = MONGO_DB_URL) =>
  mongoose.set('strictQuery', false).connect(mongoDatabaseURI);

export default connectToDatabase;

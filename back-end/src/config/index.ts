import dotenv from 'dotenv';

dotenv.config();

export const authConfig = {
  secret: String(process.env.SECRET),
  login: String(process.env.LOGIN),
  password: String(process.env.PASSWORD),
  expires: '1d',
};

export const dbConfig = {
  name: String(process.env.DB_NAME),
  password: String(process.env.DB_PASSWORD),
  port: String(process.env.DB_PORT),
  user: String(process.env.DB_USER),
  host: String(process.env.DB_HOST),
};

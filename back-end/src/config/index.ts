import dotenv from 'dotenv';

dotenv.config();

export const authConfig = {
  secret: String(process.env.SECRET),
  login: String(process.env.LOGIN),
  password: String(process.env.PASSWORD),
  expires: '1d',
};

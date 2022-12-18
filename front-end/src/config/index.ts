import dotenv from 'dotenv';

dotenv.config();

export const loginConfig = {
  login: String(process.env.LOGIN),
  password: String(process.env.PASSWORD),
};

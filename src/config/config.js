/*eslint-env node*/
import dotenv from 'dotenv';
import path from 'path';

const root = path.join.bind(this, __dirname);
dotenv.config({ path: root('.env')});

export const PORT = process.env.PORT || 5000;
export const DB_URL = process.env.DB_URI;
export const JWT_SECRET = process.env.SESSION_SECRET;
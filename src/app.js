/*eslint-env node*/
import express from 'express';
import connectDB from './config/db';
import { PORT } from './config/config';
//import passport from 'passport';

//Routes
import users from './routes/api/users';

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/users', users);

app.listen(PORT, console.log(`Сервер запустился на порту ${PORT}`));
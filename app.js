const express = require('express');
const passport = require('passport');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
const users = require('./routes/api/users');

app.use('/api/users', users);

const port = 5000;
app.listen(port, console.log(`Сервер запустился на порту ${port}`));
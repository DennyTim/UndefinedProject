const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const connectDB = require('./config/db');
// const bcrypt = require('bcryptjs');
// const methodOverride = require('method-override');
// const session = require('express-session');
// const passport = require('passport');

const app = express();
connectDB();

//Require models
const Task = require('./models/Task');
const User = require('./models/User');

//How middleware works
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// @route   GET /
// @desc    Get test page handlebars
// @access  Public
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', {
      title: title
  });
});

// @route   POST task/create
// @desc    POST create test task
// @access  Must be private
app.post('/task/create', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    status: req.body.status,
    description: req.body.description
  });
  const result = await task.save();
  res.json(result);
});

// @route   POST /user/create
// @desc    POST create test user
// @access  Public
app.post('/user/create', async (req, res) => {
  const {name, email, password, githublogin} = req.body;

  const user = new User({name, email, password, githublogin});
  const result = await user.save();
  res.json(result);
});

app.listen(3000, 'localhost', () => console.log('Сервер запущен!'));
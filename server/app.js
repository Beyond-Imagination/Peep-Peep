const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

require('dotenv').config({ path: path.join(__dirname, 'config/.env') });

const passport = require('./passport');
const cors = require('cors');

require('./models/connector')();

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  }));

app.use(passport.initialize());
app.use(passport.session());

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const peepsRouter = require('./routes/peeps');

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/peep', peepsRouter);

module.exports = app;

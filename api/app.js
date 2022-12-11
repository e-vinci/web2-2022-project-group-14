const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const tacheRouter = require('./routes/taches');
const pizzaRouter = require('./routes/pizzas');
const authsRouter = require('./routes/auths');
const playerCharacterRouter = require('./routes/playerCharacters');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/pizzas', pizzaRouter);
app.use('/taches', tacheRouter);
app.use('/auths', authsRouter);
app.use('/playerCharacters', playerCharacterRouter);


module.exports = app;

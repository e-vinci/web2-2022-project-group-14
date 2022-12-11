const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const tacheRouter = require('./routes/taches');
const pizzaRouter = require('./routes/pizzas');
const authsRouter = require('./routes/auths');
<<<<<<< HEAD

=======
const enemiesRouter = require('./routes/enemies');
const playerCharacterRouter = require('./routes/playerCharacters');
>>>>>>> 10b0c2631de1ed17110d5a442397b76ba1ba96c3

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/pizzas', pizzaRouter);
app.use('/taches', tacheRouter);
app.use('/auths', authsRouter);
<<<<<<< HEAD

=======
app.use('/enemies', enemiesRouter);
app.use('/playerCharacters', playerCharacterRouter);
>>>>>>> 10b0c2631de1ed17110d5a442397b76ba1ba96c3

module.exports = app;

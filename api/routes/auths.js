const express = require('express');
const { register, login, addEnemy,removeEnemy,readAllEnemies,fight } = require('../models/users');

const router = express.Router();

/* Register a user */
router.post('/register', (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  console.log('username', username);
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;
  console.log('password', password);

  if (!username || !password) return res.sendStatus(400); // 400 Bad Request

  const authenticatedUser = register(username, password);

  if (!authenticatedUser) return res.sendStatus(409); // 409 Conflict

  return res.json(authenticatedUser);
});

/* Login a user */
router.get('/login', (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Reques

  const authenticatedUser = login(username, password);

  if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized

  return res.json(authenticatedUser);
});


/* addEnemy */
router.post('/addEnemy', (req, res) => {
  const authenticatedUser = addEnemy();
  if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized
  return res.json(authenticatedUser);
});

/* removeEnemy */
router.post('/removeEnemy', (req, res) => {
  const authenticatedUser = removeEnemy();
  if(!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized
  return res.json(authenticatedUser);
});

/* readAllEnemies */
router.get('/readAllEnemies', (req, res) => {
  const authenticatedUser = readAllEnemies();
  if(!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized
  return res.json(authenticatedUser);
});

/* fight */
router.post('/fight', (req, res) => {
  const authenticatedUser = fight();
  if(!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized
  return res.json(authenticatedUser);
});


module.exports = router;

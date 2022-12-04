const jwtDecode = require('jwt-decode')

const jwt = require('jsonwebtoken');
const path = require('node:path');
const { parse, serialize } = require('../utils/json');


const jwtSecret = 'ilovemytasks!';
const lifetimeJwt = 24 * 60 * 60 * 1000 * 365 * 10; // in ms : 24 * 60 * 60 * 1000 = 24h

const jsonDbPath = path.join(__dirname, '/../data/users.json');

let authenticatedUser = null;

const defaultUsers = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
  },
];

function login(username, password) {
  const userFound = readOneUserFromUsername(username);
  if (!userFound) return undefined;
  if (userFound.password !== password) return undefined;

  
  // create a JWT token
  const token = jwt.sign(
    {
      id: userFound.id,
      username: userFound.username,
    },
    jwtSecret,
    {
      expiresIn: lifetimeJwt,
    },
  );

  authenticatedUser = {
    username,
    token,
  };

  return authenticatedUser;
}

function register(username, password) {
  const userFound = readOneUserFromUsername(username);
  if (userFound) return undefined;

  const createdUser = createOneUser(username, password);

  // create a JWT token
  const token = jwt.sign(
    {
      id: createdUser.id,
      username: createdUser.username,
    },
    jwtSecret,
    {
      expiresIn: lifetimeJwt,
    },
  );

  authenticatedUser = {
    username,
    token,
  };

  // decode token to get id
  const decodedToken = jwtDecode(token, jwtSecret);
  const {id} = decodedToken;
  console.log("id", id);

  return authenticatedUser;
}

function readOneUserFromUsername(username) {
  const users = parse(jsonDbPath, defaultUsers);
  const indexOfUserFound = users.findIndex((user) => user.username === username);
  if (indexOfUserFound < 0) return undefined;

  return users[indexOfUserFound];
}

function createOneUser(username, password) {
  const users = parse(jsonDbPath, defaultUsers);

  const createdUser = {
    id: getNextId(),
    username,
    password,
  };

  users.push(createdUser);

  serialize(jsonDbPath, users);

  return createdUser;
}

function getNextId() {
  const users = parse(jsonDbPath, defaultUsers);
  const lastItemIndex = users?.length !== 0 ? users.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = users[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

function returnUser() {
  return authenticatedUser;
}


module.exports = {
  login,
  register,
  readOneUserFromUsername,
  returnUser,
};
const jwtDecode = require('jwt-decode')

const jwt = require('jsonwebtoken');
const path = require('node:path');
const { v4: uuidv4 } = require('uuid');
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

  // Vérifie si l'utilisateur a une liste d'ennemis existante
  let {enemies} = userFound;
  if (!enemies) {
    // Si non, créez une nouvelle liste d'ennemis
    enemies = [
      {
        id: uuidv4(),
        name: 'premier',
        lvl: 1,
        HP: calcuateHP(1),
        attack: calculateAttack(1),
      },
    ];
  }

  // Créez un jeton JWT
  const token = jwt.sign(
    {
      id: userFound.id,
      username: userFound.username,
      enemies, // incluez la liste d'ennemis dans le JWT
    },
    jwtSecret,
    {
      expiresIn: lifetimeJwt,
    },
  );

  authenticatedUser = {
    username,
    token,
    enemies,
  };

  return authenticatedUser;
}

function register(username, password) {
  const userFound = readOneUserFromUsername(username);
  if (userFound) return undefined;

  const createdUser = createOneUser(username, password);

  // Créez une nouvelle liste d'ennemis pour le nouvel utilisateur
  const enemies = [
    {
      id: uuidv4(),
      name: 'premier',
      lvl: 1,
      HP: calcuateHP(1),
      attack: calculateAttack(1),
    },
  ];

  // Créez un jeton JWT
  const token = jwt.sign(
    {
      id: createdUser.id,
      username: createdUser.username,
      enemies, // incluez la liste d'ennemis dans le JWT
    },
    jwtSecret,
    {
      expiresIn: lifetimeJwt,
    },
  );

  authenticatedUser = {
    username,
    token,
    enemies,
  };

  // décodez le jeton pour obtenir l'ID
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

function returnId() {
  const decodedToken = jwtDecode(authenticatedUser.token, jwtSecret);
  const {id} = decodedToken;
  console.log("id", id);
  return id;
}


/*-----------------------------------*/

// calculate HP
function calcuateHP(lvl){
  const HP = lvl * 2;
  return HP;
  };
  
  // calculate attack
function calculateAttack(lvl){
  const attack = lvl + lvl;
  return attack;
  };
  
  // use library to create a random name
function randomName(){
  const name = "enemy";
  return name;
  };

/* Function -> Display all the enemies */
function readAllEnemies() {
  // Check if user is authenticated
  if (!authenticatedUser) return undefined;

  // Decode JWT to get user's enemies list
  const decodedToken = jwtDecode(authenticatedUser.token, jwtSecret);
  const {enemies} = decodedToken;

  return enemies;
}

function addEnemy() {
  // Check if user is authenticated
  if (!authenticatedUser) return undefined;

  // Decode JWT to get user's enemies list
  const decodedToken = jwtDecode(authenticatedUser.token, jwtSecret);
  const {enemies} = decodedToken;

  // Create new enemy object
  // Get the last enemy in the list  
  const lastEnemy = enemies.slice(-1)[0];

  // Get the level of the last enemy  
  const lvl = lastEnemy.lvl + 1;
  
  const newEnemy = {
    id: uuidv4(),
    name : randomName(), 
    lvl,
    hp : calcuateHP(lvl),
    attack : calculateAttack(lvl),
  };

  // Add new enemy to user's enemies list
  enemies.push(newEnemy);

  // Update JWT with new enemies list
  const updatedToken = jwt.sign(
    {
      id: decodedToken.id,
      username: decodedToken.username,
      enemies,
    },
    jwtSecret,
    {
      expiresIn: lifetimeJwt,
    },
  );

  authenticatedUser.token = updatedToken;
  return newEnemy;
}

function removeEnemy() {
   // Check if user is authenticated
   if (!authenticatedUser) return undefined;

   // Decode JWT to get user's enemies list
   const decodedToken = jwtDecode(authenticatedUser.token, jwtSecret);
   const {enemies} = decodedToken;

  // delete the first enemy
  const enemy = enemies.shift();

  // Update JWT with new enemies list
  const updatedToken = jwt.sign(
    {
      id: decodedToken.id,
      username: decodedToken.username,
      enemies,
    },
    jwtSecret,
    {
      expiresIn: lifetimeJwt,
    },
  );

  authenticatedUser.token = updatedToken;
  return enemy;
}

// 
function fight() {
 // Check if user is authenticated
 if (!authenticatedUser) return undefined;

 // Decode JWT to get user's enemies list
 const decodedToken = jwtDecode(authenticatedUser.token, jwtSecret);
 const {enemies} = decodedToken;

  // get the first enemy
  const firstEnemy = enemies[0];
  if (!firstEnemy) return undefined; // If no enemy is found, stop execution

  // get le joueur de chez efe
  const player = getPlayer();

  while (player.HP > 0 && firstEnemy.HP > 0) {
    // Calculate the player's and enemy's remaining hit points after combat
    const playerHP = player.HP - firstEnemy.attack;
    const enemyHP = firstEnemy.HP - player.attack;

    // Update player and enemy HP
    player.HP = playerHP;
    firstEnemy.HP = enemyHP;
  }

  // If player dies, stop execution
  if (player.HP <= 0) return undefined;

  // If the enemy dies, add a new enemy and remove the current enemy
  addEnemy();
  removeEnemy();
  getXP(returnId(),0,firstEnemy.lvl);

  const updatedToken = jwt.sign(
    {
      id: decodedToken.id,
      username: decodedToken.username,
      enemies,
    },
    jwtSecret,
    {
      expiresIn: lifetimeJwt,
    },
  );

  authenticatedUser.token = updatedToken;
  return firstEnemy;
}


/*-----------------------------------*/


module.exports = {
  login,
  register,
  readOneUserFromUsername,
  returnUser,
  returnId,
  fight,
  addEnemy,
  removeEnemy,
  readAllEnemies,
};
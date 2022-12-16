const jwtDecode = require('jwt-decode')

const jwt = require('jsonwebtoken');
const path = require('node:path');
const { v4: uuidv4 } = require('uuid');
const Chance = require('chance');
const { parse, serialize } = require('../utils/json');
const { getXP, getPlayer, createPlayerCharacter,updateData } = require('./playerCharacters');


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


function isLoggedIn() {
  return authenticatedUser !== null;
} 

// display a different nav bar if the user is logged in
function displayNav() {
  if (isLoggedIn()) {
    return `
    <div class="d-flex justify-content-around">
      <div id="leftPartHeader" class="align-items-center">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#loginModal">
        <p class="btnHeaderText">Login</p>
        </button>
        <div class="vr"></div>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
        <p class="btnHeaderText">Register</p>
        </button>
      </div>
      <div id="rightPartHeader">
        <div class="navbar">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </div>
    `;
  } return `
  <div class="d-flex justify-content-around">
    <div id="leftPartHeader" class="align-items-center">
      <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#loginModal">
      <p class="btnHeaderText">Login</p>
      </button>
      <div class="vr"></div>
      <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
      <p class="btnHeaderText">Register</p>
      </button>
    </div>
    <div id="rightPartHeader">
      <div class="navbar">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </div>
    `;
}

// create a function to disconnect the user
function disconnect() {
  authenticatedUser = null;
} 

        


function register(username, password) {
  const userFound = readOneUserFromUsername(username);
  if (userFound) return undefined;

  // Créez une nouvelle liste d'ennemis pour le nouvel utilisateur
  const enemies = [
    {
      id: uuidv4(),
      name: 'Margit le déchu',
      lvl: 1,
      HP: calcuateHP(1),
      attack: calculateAttack(1),
    },
    {
      id: uuidv4(),
      name: 'Iudex Gundyr',
      lvl: 2,
      HP: calcuateHP(2),
      attack: calculateAttack(2),
    },
    {
      id: uuidv4(),
      name: 'Lothric',
      lvl: 3,
      HP: calcuateHP(3),
      attack: calculateAttack(3),
    },
    {
      id: uuidv4(),
      name: 'Le roi sans nom',
      lvl: 4,
      HP: calcuateHP(4),
      attack: calculateAttack(4),
    },
    {
      id: uuidv4(),
      name: 'Malenia, épée de Miquella',
      lvl: 5,
      HP: calcuateHP(5),
      attack: calculateAttack(5),
    },

  ];

  const createdUser = createOneUser(username, password, enemies);

  // Créez un jeton JWT
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

function createOneUser(username, password, enemies) {
  const users = parse(jsonDbPath, defaultUsers);

  const createdUser = {
    id: getNextId(),
    username,
    password,
    enemies,
  };

  users.push(createdUser);
  createPlayerCharacter(createdUser.id);
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
  if (lvl%5 === 0){
    return ((lvl + ((lvl/1,5) * 2))*2);
  }
  const HP = lvl + ((lvl/1,5) * 2);
  return HP;
  };
  
  // calculate attack
function calculateAttack(lvl){
  if (lvl%5 === 0){
    return ((lvl + (lvl * 2))*2);
  }
  const attack = lvl + (lvl * 2);
  return attack;
};
  
  // use library to create a random name
function randomName(){
  const chance = new Chance();
  const random = chance.name();
  console.log(random);
  return random;
};

function readAllEnemies() {
  // Check if user is authenticated
  if (!authenticatedUser) return undefined;
  const {enemies} = authenticatedUser;
  return enemies;
}

function addEnemy() {
  // Check if user is authenticated
  if (!authenticatedUser) return undefined;
  const users = parse(jsonDbPath, defaultUsers);

  const {enemies} = authenticatedUser;

  // Create new enemy object
  // Get the last enemy in the list  
  const lastEnemy = enemies[enemies.length - 1];

  // Get the level of the last enemy  
  const lvl = lastEnemy.lvl + 1;
  
  const newEnemy = {
    id: uuidv4(),
    name : randomName(), 
    lvl,
    HP : calcuateHP(lvl),
    attack : calculateAttack(lvl),
  };

  // Add new enemy to user's enemies list
  enemies.push(newEnemy);
  authenticatedUser.enemies = enemies;

  // Update user's enemies list in the database
  const indexOfUserFound = users.findIndex((user) => 
  user.username === authenticatedUser.username);
  users[indexOfUserFound].enemies = enemies;

  serialize(jsonDbPath, users);
  return newEnemy;
}

function removeEnemy() {
  // Check if user is authenticated
  if (!authenticatedUser) return undefined;
  const users = parse(jsonDbPath, defaultUsers);

  const {enemies} = authenticatedUser;
  // delete the first enemy
  const enemy = enemies.shift();
  authenticatedUser.enemies = enemies;

  // Update user's enemies list in the database
  const indexOfUserFound = users.findIndex((user) => 
  user.username === authenticatedUser.username);
  users[indexOfUserFound].enemies = enemies;
  
  serialize(jsonDbPath, users);
  return enemy;
}

// 
function fight() {
 // Check if user is authenticated
 if (!authenticatedUser) return "Joueur non authentifié";

  const {enemies} = authenticatedUser;
  // get the first enemy
  const firstEnemy = enemies[0];
  if (!firstEnemy) return undefined; // If no enemy is found, stop execution

  // Ne fonctionne pas encore
  const player = getPlayer(returnId());
  const playerMaxHP = player.currentHP;

  while (player.currentHP > 0 && firstEnemy.HP > 0) {
    // Calculate the player's and enemy's remaining hit points after combat
    const playerHP = player.currentHP - firstEnemy.attack;
    const enemyHP = firstEnemy.HP - player.attack;

    // Update player and enemy HP
    player.currentHP = playerHP;
    firstEnemy.HP = enemyHP;
  }
  
  let playerdead = false;
  // If player dies, stop execution
  if (player.currentHP <= 0){
    player.currentHP = playerMaxHP  - player.level;
    if(player.currentHP <= 0){
      player.currentHP = 0;
    }
    firstEnemy.HP = calcuateHP(firstEnemy.lvl);
    playerdead = true;
  }

  updateData(player.currentHP, returnId());
  
  // If the enemy dies, add a new enemy and remove the current enemy
  if (firstEnemy.HP <= 0){
    addEnemy();
    removeEnemy();
    getXP(returnId(),0,firstEnemy.lvl);
    player.currentHP = player.maxHP;
    if (playerdead === true){
      return "Tu es mort mais tu as gagné";
    }
    return "Tu as gagné";
  }

  return "Tu as perdu";
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
  displayNav
};
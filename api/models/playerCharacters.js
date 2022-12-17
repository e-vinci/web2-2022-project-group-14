const path = require('node:path');
const { v4: uuidv4 } = require('uuid');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/PlayerCharacters.json');
const listPlayerCharacters = [];

// create playerCharacter
function createPlayerCharacter(currentUserID) {
  const list = parse(jsonDbPath, listPlayerCharacters);

  const PlayerCharacter = {
    id: uuidv4(),
    userId: currentUserID,
    maxHP: 10,
    currentHP: 10,
    level: 1,
    XPToLvlUp: 50,
    currentXP: 0,
    attack: 2,
  };

  list.push(PlayerCharacter);
  serialize(jsonDbPath, list);
  return PlayerCharacter;
}

function getTaskXP(taskDifficulty) {
  if (taskDifficulty === '1') {
    return 10;
  }

  if (taskDifficulty === '2') {
    return 20;
  }

  if (taskDifficulty === '3') {
    return 30;
  }

  return 0;
}

function getMonsterXP(monsterLevel) {
  if (monsterLevel > 0) {
    return monsterLevel * 10;
  }

  return 0;
}

function getXP(userID, taskDifficulty, monsterLevel) {
  const list = parse(jsonDbPath, listPlayerCharacters);
  // eslint-disable-next-line no-shadow
  console.log(userID);
  console.log(taskDifficulty);
  console.log(monsterLevel);
  const playerCharacter = list.find((PlayerCharacter) => PlayerCharacter.userId === userID);
  const taskXP = getTaskXP(taskDifficulty);
  console.log(taskXP);
  const monsterXP = getMonsterXP(monsterLevel);
  console.log(monsterXP);
  const totalXP = taskXP + monsterXP;
  playerCharacter.currentXP += totalXP;
  if (playerCharacter.currentXP >= playerCharacter.XPToLvlUp) {
    playerCharacter.level += 1;
    playerCharacter.currentXP = 0;
    playerCharacter.XPToLvlUp *= 1.3;
    playerCharacter.maxHP += 5;
    playerCharacter.currentHP = playerCharacter.maxHP;
    playerCharacter.attack += 1;
  }
  serialize(jsonDbPath, list);
  return playerCharacter;
}

function updateHP(id, hp) {
  const list = parse(jsonDbPath, listPlayerCharacters);
  const playerCharacter = list.find((PlayerCharacter) => PlayerCharacter.userId === id);
  playerCharacter.currentHP += hp;
  if (playerCharacter.currentHP > playerCharacter.maxHP) {
    playerCharacter.currentHP = playerCharacter.maxHP;
  }
  serialize(jsonDbPath, list);
  return playerCharacter;
}



/* Prototype de get User -- A Vérifier */
function getPlayer(id) {
  const list = parse(jsonDbPath, listPlayerCharacters);
  const playerCharacter = list.find((PlayerCharacter) => PlayerCharacter.userId === id);
  return playerCharacter;
}


function updateData(hp,id) {
  const players = parse(jsonDbPath, listPlayerCharacters);
  const playerCharacter = players.find((PlayerCharacter) => PlayerCharacter.userId === id);
  playerCharacter.currentHP = hp;
  serialize(jsonDbPath, players);
  return hp;
}

// method to get currentxp
function getCurrentXP(id) {
  const list = parse(jsonDbPath, listPlayerCharacters);
  const playerCharacter = list.find((PlayerCharacter) => PlayerCharacter.userId === id);
  return playerCharacter.currentXP;
}

// method to get XPToLvlUp
function getXPToLvlUp(id) {
  const list = parse(jsonDbPath, listPlayerCharacters);
  const playerCharacter = list.find((PlayerCharacter) => PlayerCharacter.userId === id);
  return playerCharacter.XPToLvlUp;
}

// method to get currentHP
function getCurrentHP(id) {
  const list = parse(jsonDbPath, listPlayerCharacters);
  const playerCharacter = list.find((PlayerCharacter) => PlayerCharacter.userId === id);
  return playerCharacter.currentHP;
}

// method to get maxHP
function getMaxHP(id) {
  const list = parse(jsonDbPath, listPlayerCharacters);
  const playerCharacter = list.find((PlayerCharacter) => PlayerCharacter.userId === id);
  return playerCharacter.maxHP;
}

// method to get level
function getLevel(id) {
  const list = parse(jsonDbPath, listPlayerCharacters);
  const playerCharacter = list.find((PlayerCharacter) => PlayerCharacter.userId === id);
  return playerCharacter.level;
}

// method to get attack
function getAttack(id) {
  const list = parse(jsonDbPath, listPlayerCharacters);
  const playerCharacter = list.find((PlayerCharacter) => PlayerCharacter.userId === id);
  return playerCharacter.attack;
}

module.exports = {
  createPlayerCharacter,
  getXP,
  updateHP,
  getPlayer,
  updateData,
  getCurrentXP,
  getCurrentHP,
  getMaxHP,
  getLevel,
  getAttack,
  getXPToLvlUp,
};

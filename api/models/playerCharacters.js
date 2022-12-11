const path = require('node:path');
const { v4: uuidv4 } = require('uuid');
const { parse, serialize } = require('../utils/json');
// eslint-disable-next-line no-unused-vars
// const { returnId } = require('./users');

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



/* Prototype de get User -- A Vérifier */
function getPlayer(userID) {
  const list = parse(jsonDbPath, listPlayerCharacters);
  const playerCharacter = list.find((PlayerCharacter) => PlayerCharacter.userId === userID);
  return playerCharacter;
}


module.exports = {
  createPlayerCharacter,
  getXP,
  getPlayer,
};

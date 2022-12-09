const path = require('node:path');
const { parse, serialize } = require('../utils/json');
const { v4: uuidv4 } = require('uuid');
const { returnId } = require('./users');

const jsonDbPath = path.join(__dirname, '/../data/playerCharacters.json');

const listPlayerCharacters = [];

  // create ennemies
  function createPlayerCharacter(currentUserID) {
    const list = parse(jsonDbPath, listPlayerCharacters	);

    const newPlayerCharacter = {
      id: uuidv4(),
      userId: currentUserID,
      maxHP: 10,
      currentHP: 10,
      level: 1,
      XPToLvlUp: 50,
      currentXP: 0,
      attack: 2
    };

    list.push(newPlayerCharacter);
    serialize(jsonDbPath, list);
    return newPlayerCharacter;
  }

  module.exports = {
    createPlayerCharacter,
  };
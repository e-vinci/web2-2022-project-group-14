const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/taches.json');

// import a libraiary to create a random names
// eslint-disable-next-line import/order, import/no-unresolved
const randomNames = require('node-random-name');


const enemies = [
    {
      id: 1,  
      name: randomName(),
      HP: calcuateHP(getLastId()),
    },
  ];

  // calculate HP
  function calcuateHP(id){
    const HP = id * 2;
    return HP;
  };

  // get last id
  function getLastId() {
    const list = parse(jsonDbPath,enemies);
    const lastItemIndex = list?.length !== 0 ? list.length - 1 : undefined;
    if (lastItemIndex === undefined) return 1;
    const lastId = enemies[lastItemIndex]?.id;
    return lastId;
  }

  // create ennemies
  function createEnemies() {
    const id = getLastId() + 1;
    const newEnemy = {
      id,
      name: randomName(),
      HP: calcuateHP(id),
    };
    enemies.push(newEnemy);
    serialize(jsonDbPath, enemies);
    return newEnemy;
  }

  // use library to create a random name
  function randomName(){
    const name = randomNames({ first: true });
    return name;
  }

  // delere first ennemy
  function KillEnemy(){
    const list = parse(jsonDbPath, enemies);
    const firstEnemy = list[0];
    list.shift();
    serialize(jsonDbPath, list);
    return firstEnemy;
  }

  // combat between ennemies and player
  function combat(){
    do{
      const list = parse(jsonDbPath, enemies);
      const firstEnemy = list[0];
      const firstEnemyHP = firstEnemy.HP;
      const firstEnemyId = firstEnemy.id;
      const firstEnemyName = firstEnemy.name;
      const firstEnemyNewHP = firstEnemyHP - 1;
      const firstEnemyNew = {
        id : firstEnemyId,
        name : firstEnemyName,
        HP: firstEnemyNewHP,
      };
      list[0] = firstEnemyNew;
      serialize(jsonDbPath, list);
    } while (enemies[0].HP > 0);
    KillEnemy();
    createEnemies();
  }
  

  module.exports = {
    combat
  };
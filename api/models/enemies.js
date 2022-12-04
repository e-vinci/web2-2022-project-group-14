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
      attack: calculateAttack(getLastId()),

    },
  ];

  // calculate HP
  function calcuateHP(id){
    const HP = id * 2;
    return HP;
  };

  // calculate attack
  function calculateAttack(id){
    const attack = id + id;
    return attack;
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

  // combat between a ennemy and player as long as enemy HP > 0 or player HP > 0
  function combat(){
    const list = parse(jsonDbPath, enemies);
    const firstEnemy = list[0];
    const playerHP = 10; // recup player HP
    const playerAttack = 2; // recup player attack
    const enemyHP = firstEnemy.HP;
    const enemyAttack = firstEnemy.attack;
    let enemyHPAfterCombat = enemyHP - playerAttack;
    let playerHPAfterCombat = playerHP - enemyAttack;
    while (enemyHPAfterCombat > 0 && playerHPAfterCombat > 0){
      enemyHPAfterCombat -= playerAttack;
      playerHPAfterCombat -= enemyAttack;
    }
    if (enemyHPAfterCombat <= 0){
      console.log('ennemy is dead');
      KillEnemy();
      createEnemies();
    }
    if (playerHPAfterCombat <= 0){
      console.log('player is dead');
    }
    serialize(jsonDbPath, list);
  }

  module.exports = {
    combat,
    createEnemies,
    KillEnemy,
  };
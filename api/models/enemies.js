const path = require('node:path');
const { parse, serialize } = require('../utils/json');
// const { returnId } = require ('./users');

const jsonDbPath = path.join(__dirname, '/../data/enemies.json');

// import a libraiary to create a random names
// eslint-disable-next-line import/order, import/no-unresolved
// const randomNames = require('node-random-name');

// crée un tableau d'objets représentant des ennemis, avec des propriétés id, name, HP, et attack.
const enemies = [
    {
      id: 1,  
      name: randomName(),
      HP: calcuateHP(1),
      attack: calculateAttack(1),
    },
  ];

  // crée un objet de type Map, et appelle la fonction returnId() pour récupérer un identifiant d'utilisateur.
// const map = new Map();

  // utilise la méthode get() de l'objet Map pour récupérer la liste d'ennemis associée à l'identifiant d'utilisateur.
  // Si cette liste n'existe pas dans le Map (si la valeur retournée par get() est undefined), il utilise la méthode set() pour ajouter la liste d'ennemis au Map en utilisant l'identifiant d'utilisateur comme clé.
// const idUtilisateur = returnId();

// crée une liste d'ennemis et ajoute cette liste au Map en utilisant l'identifiant d'utilisateur comme clé. Si la liste d'ennemis n'existe pas déjà dans le Map, elle est ajoutée.
/*
const listEnemy =  map.get(idUtilisateur);
if(listEnemy === undefined){
  map.set(idUtilisateur, enemies);
}
*/


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
    const lastId = list[lastItemIndex]?.id;
    return lastId;
  }

  // create ennemies
  function createEnemies() {
    const list = parse(jsonDbPath,enemies);
    const id = getLastId() + 1;
    const newEnemy = {
      id,
      name: randomName(),
      HP: calcuateHP(id),
      attack: calculateAttack(id),
    };
    list.push(newEnemy);
    serialize(jsonDbPath, list);
    return newEnemy;
  }

  // use library to create a random name
  function randomName(){
    const name = "enemy";
    return name;
  }

  // delete first ennemy
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
      gainExperience();
      createEnemies();
      KillEnemy();
    }
    if (playerHPAfterCombat <= 0){
      console.log('player is dead');
    }
    serialize(jsonDbPath, list);
  }

  // gain experience par rapport a l'id de l'ennemi
  function gainExperience(){
    const list = parse(jsonDbPath, enemies);
    const firstEnemy = list[0];
    const {id} = firstEnemy;
    const experience = id * 10;
    console.log(experience);
    return experience;
  }

  module.exports = {
    combat,
    createEnemies,
    KillEnemy,
    gainExperience,
  };
const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/taches.json');

const ennemies = [
    {
      id: 1,  
      name: "1",
      HP: calcuateHP(getLastId()),
    },
  ];


  function calcuateHP(id){
    const HP = id * 2;
    return HP;
  };


  function getLastId() {
    const list = parse(jsonDbPath,ennemies);
    const lastItemIndex = list?.length !== 0 ? list.length - 1 : undefined;
    if (lastItemIndex === undefined) return 1;
    const lastId = ennemies[lastItemIndex]?.id;
    return lastId;
  }


  function createEnnemies(){
    const list = parse(jsonDbPath, ennemies);
    const idEnnemy = getLastId() + 1;
  
    const createEnnemy = {
      id : idEnnemy,
      name : ennemyName(),
      HP: calcuateHP(idEnnemy),
    };
  
    list.push(createEnnemy);
  
    serialize(jsonDbPath, list);
  
    return createEnnemy;
  }
  

  function ennemyName(){
    const name = (getLastId() + 1).toString();
    return name;
  }


  function killEnnemy(){
    // add XP systeme
    ennemies.shift();
  }


  function combat(){
    killEnnemy();
    createEnnemies();

  }

  module.exports = {
    combat
  };
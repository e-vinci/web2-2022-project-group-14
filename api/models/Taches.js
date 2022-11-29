const { v4: uuidv4 } = require('uuid');

const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/taches.json');

const listTask = [
    {
      id: 1,
      title: 'Tache : 1',
      content: 'Gruyère, Sérac, Appenzel, Gorgonzola, Tomates',
    },
    {
      id: 2,
      title: 'Tache : 2',
      content: 'Tomates, Courgettes, Oignons, Aubergines, Poivrons',
    },
  ];

  /* Function -> Display all the task */
function readAllTask() {
const list = parse(jsonDbPath, listTask);
return list;
}

/* Function -> Create a task */
function createOnetask(title, content) {
    const list = parse(jsonDbPath, listTask);
  
    const createdTask = {
      id : uuidv4(),
      title,
      content,
    };
  
    list.push(createdTask);
  
    serialize(jsonDbPath, list);
  
    return createdTask;
}


module.exports = {
    readAllTask,
    createOnetask
  };
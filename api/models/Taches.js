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
    {
      id: 3,
      title: 'Tache : 3',
      content: 'Mozarella, Tomates, Oignons, Poivrons, Champignons, Olives',
    },
    {
      id: 4,
      title: 'Tache : 4',
      content: 'Gruyère, Mozarella, Lardons, Tomates',
    },
    {
      id: 5,
      title: 'Tache : 5',
      content: 'Tomates, Mozarella, Chorizo piquant, Jalapenos',
    },
  ];

  /* Function -> Display all the task */
function readAllTask() {
const list = parse(jsonDbPath, listTask);
return list;
}
/* Function -> Create a task */
function createOnetask(id, title, content) {
    const list = parse(jsonDbPath, listTask);
  
    const createdTask = {
      id, // pas sur de l'id 
      title,
      content,
    };
  
    list.push(listTask);
  
    serialize(jsonDbPath, list);
  
    return createdTask;
}


module.exports = {
    readAllTask,
    createOnetask
  };
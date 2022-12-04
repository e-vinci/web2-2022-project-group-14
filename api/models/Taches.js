const { v4: uuidv4 } = require('uuid');

const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/taches.json');

/* difficulte de la tache */
// eslint-disable-next-line no-unused-vars
const difficule = ['1','2','3'];

const listTask = [
    {
      id: 1,
      title: 'Tache : 1',
      content: 'premiere tache',
      difficulte: '1',
      idUser : '1'
    },
    {
      id: 2,
      title: 'Tache : 2',
      content: 'deuxieme tache',
      difficulte: '2',
      idUser : '2'
    },
  ];

/* Function -> Display all the task */
function readAllTask() {
const list = parse(jsonDbPath, listTask);
return list;
}

/* Function -> Create a task */
function createOnetask( title, content, difficulte, idUser) {
    const list = parse(jsonDbPath, listTask);
  
    const createdTask = {
      id : uuidv4(),
      title,
      content,
      difficulte,
      idUser, 
    };
  
    list.push(createdTask);
  
    serialize(jsonDbPath, list);
  
    return createdTask;
}

/* Function -> Remove a Task from the Task List with the Task ID */
function removeATask(id){
  const idtask  = parseInt(id, 10); // Transform the string id (object) into integer
  const list = parse(jsonDbPath, listTask);
  const foundIndex = list.findIndex((task) => task.id === idtask);
  if (foundIndex < 0) return undefined;
  const deleteTask  = list.splice(foundIndex, 1);
  const deleteTaskDiplsay = deleteTask[0];
  serialize(jsonDbPath, list);
  console.log(deleteTaskDiplsay)
  return deleteTaskDiplsay;
  ;
}


module.exports = {
    readAllTask,
    createOnetask,
    removeATask
  };
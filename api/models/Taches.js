const jwtDecode = require('jwt-decode')

const { v4: uuidv4 } = require('uuid');

const path = require('node:path');
const { parse, serialize } = require('../utils/json');
const { returnUser, returnId } = require('./users');


const jsonDbPath = path.join(__dirname, '/../data/taches.json');

/* difficulte de la tache */
// eslint-disable-next-line no-unused-vars
const difficule = ['1','2','3'];

const listTask = [];

/* Function -> Display all the task */
function readAllTask() {
  const list = parse(jsonDbPath, listTask);
  // check if the id is null -> error 
  list.filter((idUser) => idUser.id === returnId())
  return list;
}

/* Function -> Create a task */
function createOnetask( title, content, difficulte) {
    const list = parse(jsonDbPath, listTask);

    const createdTask = {
      id : uuidv4(),
      title,
      content,
      difficulte,
      idUser : returnId()
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
  console.log(foundIndex);
  if (foundIndex < 0) return undefined;
  const deleteTask  = list.splice(foundIndex, 1);
  const deleteTaskDiplsay = deleteTask[0];
  serialize(jsonDbPath, list);
  console.log(deleteTaskDiplsay)
  return deleteTaskDiplsay;
  ;
}

/* Function -> Display a specific Task with the Task ID */
function displayTask(id){
  const idtask  = parseInt(id, 10); 
  const list = parse(jsonDbPath, listTask);
  const foundIndex = list.findIndex((task) => task.id === idtask);
  console.log('FoundIndex = ');
  console.log(foundIndex);
  if (foundIndex < 0) return undefined;

  const task = {
    title : list[foundIndex].title, 
    content : list[foundIndex].content
  }

  console.log(task);
  serialize(jsonDbPath, list);
  return task;
}


module.exports = {
    readAllTask,
    createOnetask,
    removeATask, 
    displayTask
  };
const { v4: uuidv4 } = require('uuid');

const path = require('node:path');
const { parse, serialize } = require('../utils/json');
const { returnId } = require('./users');
const { getXP } = require('./playerCharacters');

const jsonDbPath = path.join(__dirname, '/../data/taches.json');

const listTask = [];

/* Function -> Display all the task */
function readAllTask() {
  const list = parse(jsonDbPath, listTask);
  const listfiltred = list.filter((task) => task.idUser === returnId());
  console.log(returnId());
  return listfiltred;
}

/* Function -> Create a task */
function createOnetask(title, content, difficulte) {
  const list = parse(jsonDbPath, listTask);

  const createdTask = {
    id: uuidv4(),
    title,
    content,
    difficulte,
    idUser: returnId(),
  };

  list.push(createdTask);

  serialize(jsonDbPath, list);

  return createdTask;
}

/* Function -> Remove a Task from the Task List with the Task ID */
function removeATask(id) {
  const idtask = id;
  console.log('idtask : ', idtask);
  const list = parse(jsonDbPath, listTask);
  console.log('list : ', list);
  const foundIndex = list.findIndex((task) => task.id === idtask);
  console.log('foundIndex : ', foundIndex);
  if (foundIndex < 0) return undefined;
  const deleteTask = list.splice(foundIndex, 1);
  console.log('deleteTask', deleteTask);
  const deleteTaskDiplsay = deleteTask[0];
  console.log('deleteTaskDiplsay', deleteTaskDiplsay);
  serialize(jsonDbPath, list);
  return deleteTaskDiplsay;
}

/* Function -> Display a specific Task with the Task ID */
function displayTask(id) {
  const idtask = id;
  const list = parse(jsonDbPath, listTask);
  const foundIndex = list.findIndex((task) => task.id === idtask);
  console.log('FoundIndex = ');
  console.log(foundIndex);
  if (foundIndex < 0) return undefined;

  const task = {
    title: list[foundIndex].title,
    content: list[foundIndex].content,
  };

  console.log(task);
  serialize(jsonDbPath, list);
  return task;
}

/* Function -> Valide a Task by the Task ID */
function valideATask(id) {
  // get difficulty of the task and add XP to the player with getXP
  const idtask = id;
  const list = parse(jsonDbPath, listTask);
  const foundIndex = list.findIndex((task) => task.id === idtask);
  console.log('FoundIndex = ');
  console.log(foundIndex);
  getXP(returnId() ,list[foundIndex].difficulte, 0);
}

module.exports = {
  readAllTask,
  createOnetask,
  removeATask,
  displayTask,
  valideATask,
};

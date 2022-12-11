const express = require('express');
// eslint-disable-next-line no-unused-vars
const path = require('node:path');
const {
  readAllTask,
  createOnetask,
  removeATask,
  displayTask,
  valideATask,
} = require('../models/taches');

const router = express.Router();

/* Routes -> Display the Task List */
router.get('/', (req, res) => {
  const allTask = readAllTask();
  return res.json(allTask);
});

/* Routes -> Create a Task to the Task List */
router.post('/', (req, res) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const content = req?.body?.content?.length !== 0 ? req.body.content : undefined;
  const difficulte = req?.body?.difficulte?.length !== 0 ? req.body.difficulte : undefined;

  if (!title || !content || !difficulte) return res.sendStatus(400); // error code 'Bad request'

  const createdTask = createOnetask(title, content, difficulte);
  return res.json(createdTask);
});

/* Routes -> Delete a Task of the Task List with the Task ID */
router.delete('/:id', (req, res) => {
  console.log(req.params.id);
  const remove = removeATask(req.params.id);
  if (!remove) return res.sendStatus(404);
  return res.json(remove);
});
module.exports = router;

/* Display a specific Task */
router.get('/:id', (req, res) => {
  const task = displayTask(req.params.id);
  return res.json(task);
});

router.post('/valide/:id', (req, res) => {
  console.log(req.params.id);
  const valide = valideATask(req.params.id);
  if (!valideATask) return res.sendStatus(404);
  return res.json(valide);
});

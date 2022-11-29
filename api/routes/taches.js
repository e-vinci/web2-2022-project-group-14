const express = require('express');
const path = require('node:path');
const {
    readAllTask,
    createOnetask,
    removeATask,
} = require('../models/taches');

const router = express.Router();

/* Routes -> Display the Task List */
router.get('/', (req,res) => {
    const allTask = readAllTask();
    return res.json(allTask);
});

/* Routes -> Create a Task to the Task List */
router.post('/', (req, res) => {
    const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
    const content = req?.body?.content?.length !== 0 ? req.body.content : undefined;

    if (!title || !content) return res.sendStatus(400); // error code 'Bad request'

    const createdTask = createOnetask(title, content);
    return res.json(createdTask);
})

/* Routes -> Delete a Task of the Task List with the Task ID */
router.delete('/:id', (req,res) => {
    console.log(req.params.id);
    const remove = removeATask(req.params.id);
    if (!remove) return res.sendStatus(404);
    return res.json(remove);
})
module.exports = router;

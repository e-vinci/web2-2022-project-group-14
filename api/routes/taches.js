const express = require('express');

const path = require('node:path');

const {
    readAllTask,
    createOnetask,
} = require('../models/taches');


const router = express.Router();

router.get('/', (req, res) => {
    
});


router.get('/displaytask', (req,res) => {
    const allTask = readAllTask();
    return res.json(allTask);
});

router.post('/addtask', (req, res) => {
    const { id } = req.body;

    const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
    const content = req?.body?.content?.length !== 0 ? req.body.content : undefined;

    if (!title || !content) return res.sendStatus(400); // error code 'Bad request'

    const createdTask = createOnetask(title, content);
    return res.json(createdTask);
})

module.exports = router;

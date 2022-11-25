const express = require('express');
const {
    readAllTask,
} = require('../models/taches');

const path = require('node:path');

const router = express.Router();

router.get('/', (req, res) => {
    
});

router.post('/addTache', (req,res) => {
    
});

router.get('/displaytask', (req,res) => {
    const allTask = readAllTask();
    return res.json(allTask);
});

module.exports = router;

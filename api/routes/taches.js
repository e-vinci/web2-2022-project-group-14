const express = require('express');
const {Tache} = require("../models/tache");
const path = require('node:path');


const router = express.Router();

const jsonDbPath = path.join(__dirname, '/../data/pizzas.json');


/* Read all the pizzas from the menu
   GET /pizzas?order=title : ascending order by title
   GET /pizzas?order=-title : descending order by title
*/
router.get('/', (req, res) => {
  
});

module.exports = router;

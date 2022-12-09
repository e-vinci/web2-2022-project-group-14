const express = require('express');
const { getXP } = require('../models/playerCharacters');

const router = express.Router();

// get xp
router.post('/', (req, res) => {
  const { taskDifficulty, monsterLevel } = req.body;
  const xp = getXP(taskDifficulty, monsterLevel);
  res.json(xp);
});

module.exports = router;

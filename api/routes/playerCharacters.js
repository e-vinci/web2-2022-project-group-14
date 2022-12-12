const express = require('express');
const { getXP, getPlayer } = require('../models/playerCharacters');
const { returnId } = require('../models/users');

const router = express.Router();

// get xp
router.post('/', (req, res) => {
  const { taskDifficulty, monsterLevel } = req.body;
  const xp = getXP(taskDifficulty, monsterLevel);
  res.json(xp);
});

router.get('/player', (req, res) => {
  const player = getPlayer(returnId());
  console.log("player", player);
  return res.json(player);
});

module.exports = router;

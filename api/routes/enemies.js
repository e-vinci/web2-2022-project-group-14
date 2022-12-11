const express = require('express');
const { createEnemies, KillEnemy, combat } = require('../models/enemies');

const router = express.Router();

/* create enemies */
router.post('/', (req, res) => {
  const newEnemy = createEnemies();
  res.json(newEnemy);
});

/* kill enemies */
router.delete('/delete', (req, res) => {
  const killedEnemy = KillEnemy();
  res.json(killedEnemy);
});

/* combat */
router.post('/combat', (req, res) => {
  const combatResult = combat();
  res.json(combatResult);
});

module.exports = router;

const express = require('express');
const { getXP, getPlayer, getAttack, getCurrentHP, getLevel, getMaxHP, getCurrentXP, getXPToLvlUp } = require('../models/playerCharacters');
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

router.get('/attack', (req, res) => {
  const attack = getAttack(returnId());
  console.log("attack", attack);
  return res.json(attack);
});

router.get('/currentHP', (req, res) => {
  const currentHP = getCurrentHP(returnId());
  console.log("currentHP", currentHP);
  return res.json(currentHP);
});

router.get('/level', (req, res) => {
  const level = getLevel(returnId());
  console.log("level", level);
  return res.json(level);
});

router.get('/maxHP', (req, res) => {
  const maxHP = getMaxHP(returnId());
  console.log("maxHP", maxHP);
  return res.json(maxHP);
});

router.get('/currentXP', (req, res) => {
  const currentXP = getCurrentXP(returnId());
  console.log("currentXP", currentXP);
  return res.json(currentXP);
});

router.get('/XPToLvlUp', (req, res) => {
  const XPToLvlUp = getXPToLvlUp(returnId());
  console.log("XPToLvlUp", XPToLvlUp);
  return res.json(XPToLvlUp);
});

module.exports = router;

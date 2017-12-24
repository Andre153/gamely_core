const express = require('express');
const router = express.Router();
const gameHandler = require('../handler/GameHandler');

/* GET home page. */
router.get('/game/feeds', (req, res, next) => {
  gameHandler.findGameFeeds().then(games => {
      res.status(200).send(games)
  }, err => {
      res.status(200).send(err);
  });
});

module.exports = router;

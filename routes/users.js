const express = require('express');
const userHandler = require('../handler/UserHandler');
const router = express.Router();


router.get('/:uuid', (req, res, next) => {
    userHandler.findUserByUUID(req.param('uuid')).then(user => {
        res.status(200).send(user)
    }, err => {
        res.status(200).send(err)
    })
});

router.post('/create', (req, res, next) => {
    userHandler.createUser(req.body).then(user => {
        res.status(200).send(user)
    })
});

router.post('/setup/:uuid', (req, res, next) => {
  userHandler.completeUser(req.param('uuid'), req.body).then(user => {
      res.status(200).send(user)
  })
});

router.post('/:uuid/game/add', (req, res, next) => {
    userHandler.addGame(req.param('uuid'), req.body).then(user => {
        res.status(200).send(user)
    }, err => {
        res.status(200).send(err)
    })
});

router.get('/:uuid/profile', (req, res, next) => {

});

module.exports = router;

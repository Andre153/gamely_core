const express = require('express');
const userHandler = require('../handler/UserHandler');
const router = express.Router();


router.get('/:uuid', (req, res, next) => {
    userHandler.findUserByUUID(req.param('uuid')).then(user => {
        res.status(200).send(user)
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

module.exports = router;

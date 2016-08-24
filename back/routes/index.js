const express = require('express');
const router = express.Router();

const indexCtrl = require('../controllers/index.ctrl');

router.get('/', indexCtrl.getIndex);
router.post('/new', indexCtrl.create);

router.get('/r/:id', indexCtrl.getResult);
router.get('/:id', indexCtrl.redirectToResult);

module.exports = router;

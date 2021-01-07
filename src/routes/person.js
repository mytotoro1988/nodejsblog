const express = require('express');
const router = express.Router();

const personController = require('../app/controllers/PersonController');

router.get('/:slug', personController.detail);
router.get('/', personController.index);

module.exports = router;

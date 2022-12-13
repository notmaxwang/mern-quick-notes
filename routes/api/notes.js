const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');


router.get('/', notesCtrl.index);
router.get('/new', notesCtrl.create);

module.exports = router;
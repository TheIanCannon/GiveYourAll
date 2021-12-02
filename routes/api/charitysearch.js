const express = require('express');
const router = express.Router();
const charityCtrl = require('../../controllers/api/charitysearch');

// GET /api/charitysearch
router.get('/', charityCtrl.charitySearch);

module.exports = router;
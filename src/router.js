const express = require('express');
const router = express();
const authController = require('./controllers/authController')

router.post('/api/auth', authController.auth);

module.exports = router;
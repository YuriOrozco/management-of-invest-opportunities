const express = require('express');
const { login, register, authToken} = require('../modules/sso');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/navigation', authToken);

module.exports = router;

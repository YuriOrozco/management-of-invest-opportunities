const express = require('express');
const {
  createUser,
  getUserByEmail,
} = require('../modules/userModule');
const router = express.Router();

router.post('/users/', createUser);
router.get('/users/:email', getUserByEmail);

module.exports = router;

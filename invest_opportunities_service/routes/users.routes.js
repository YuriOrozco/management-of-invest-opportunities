const express = require('express');
const {
  getAllUsers,
  createUser,
  getUserByEmail,
} = require('../modules/userModule');
const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users/', createUser);
router.get('/users/:email', getUserByEmail);

module.exports = router;

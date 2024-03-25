const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser } = require('../modules/userModule');

const register = async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    const token = jwt.sign({ email: newUser.email }, 'secret', {
      expiresIn: '1h',
    });
    res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = {
  register,
  login,
};

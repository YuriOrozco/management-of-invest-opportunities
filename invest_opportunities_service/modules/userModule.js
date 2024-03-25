const User = require('../models/User');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    console.log('Getting all users from database...');
    if (users) {
      res.json(users);
    } else {
      console.log('Database without users!!!!');
      res.send([]);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { fullName, email, password, birthDate } = req.body;
  try {
    const newUser = await User.create({
      fullName,
      email,
      password,
      birthDate,
    });
    console.log('User created successfully');
    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const userFound = await User.findOne({ where: { email: email } });
    console.log(`Getting user with email: ${email}`);
    if (userFound) {
      console.log(userFound);
      res.json(userFound);
    } else {
      console.log(`User with email: ${email} not foud!`);
      res.send([]);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserByEmail,
};

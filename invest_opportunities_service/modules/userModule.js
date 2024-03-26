const User = require('../models/User');

const createUser = async (data) => {
  const { fullName, email, password, birthDate } = data;
  try {
    const newUser = await User.create({
      fullName,
      email,
      password,
      birthDate,
    });
    console.log('User created successfully');
    return newUser;
  } catch (error) {
    return error.message;
  }
};

const getUserByEmail = async (email) => {
  try {
    const userFound = await User.findOne({ where: { email: email } });
    console.log(`Getting user with email: ${email}`);
    if (userFound) {
      return userFound;
    } else {
      console.log(`User with email: ${email} not foud!`);
      return null;
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createUser,
  getUserByEmail,
};

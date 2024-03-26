const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, getUserByEmail } = require('../modules/userModule');

const register = async (req, res) => {
  try {
    const { fullName, email, password, birthDate } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await createUser({
      fullName,
      email,
      password: hashedPassword,
      birthDate,
    });
    const token = jwt.sign({ newUser }, 'access_token', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.log('error', error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(404).send('User not found!');
    }
    const validPassword = bcrypt.compare(password, user.dataValues.password);
    if (!validPassword) {
      return res.status(401).send({ token: null });
    }

    const token = jwt.sign({ email }, 'access_token', {
      expiresIn: '1h',
    });
    res.send({ token });
  } catch (error) {
    return error.message;
  }
};

const authToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Unauthorized access' });

  const decoded = jwt.verify(token, 'access_token');
  const user = await getUserByEmail(decoded.email);
  if (!user) {
    return res.status(404).send('No user found');
  }
  res.json(user);
};

module.exports = {
  register,
  login,
  authToken
};

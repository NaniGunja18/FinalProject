const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = {
  users: [],
  async create(data) {
    this.users.push(data);
    return data;
  },
  findByEmail(email) {
    return this.users.find((user) => user.email === email);
  },
};

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ email, password: hashedPassword });
  res.status(201).json(newUser);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = User.findByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ userId: user.email }, 'secretkey', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;

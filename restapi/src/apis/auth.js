import { Router } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';

const router = Router();

router.get('/', (req, res) => {
  res.json({ msg: 'hello world' });
});

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json({ success: true, message: 'register successful.' });
  } catch (err) {
    res.status(400).json({ success: false, messages: err });
  }
});

router.post('/login', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'users not found.' });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        success: false,
        message:
          'some error occurred. please verify either username or password',
      });
    }
    res.status(200).json({ success: true, message: 'login successful' });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

export default router;

import express from 'express';
const router = express.Router();
import User from '../../model/User';

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({email});
    if (user) return res.status(400).json({ errors: [ { msg: 'User already exist' } ] });
    const newUser = await new User({ name, email, password }).save();
    res.status(200).json({ newUser, msg: 'Ok' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;
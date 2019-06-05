const express = require('express');
const router = express.Router();
const User = require('../../model/User');

router.post('/register', async (req, res) => {

  const { name, email, password } = req.body;

  let user = await User.findOne({email});
  
  if (user) {
    return res.status(400).json({ errors: [ { msg: 'User already exist' } ] });
  }

  const newUser = await new User({ name, email, password }).save();

  res.status(200).json({ newUser, msg: 'Ok' });
});

module.exports = router;
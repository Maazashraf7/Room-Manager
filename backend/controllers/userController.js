const User = require('../models/user');

// Login Controller
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email,password });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      success: false,
      error
    });
  }
};

// Register Controller
const registerController = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error
    });
  }
};


module.exports = {
  loginController,
  registerController
 
};

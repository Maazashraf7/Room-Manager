const express = require('express');

const {
  loginController,
  registerController

} = require('../controllers/userController');

const router = express.Router();

// Register a new user
router.post('/users/register', registerController);

// Login user
router.post('/users/login', loginController);


module.exports = router;

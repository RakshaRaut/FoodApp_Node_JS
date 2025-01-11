const express = require('express');
const { registerController } = require('../controllers/authControllers');
const { loginController } = require('../controllers/testController');

const router = express.Router();

// routes
// REGISTER || POST
router.post('/register', registerController);

// LOGIN || POST
router.post('/login', loginController);

module.exports = router;
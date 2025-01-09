const express = require('express');
const { testUserController } = require('../controllers/testController');

// router object
const router = express.Router();

// 

// route Get | OOST | PUT | DELETE
router.get('/test-user', testUserController );

// export
module.exports = router;
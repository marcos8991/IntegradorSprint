var express = require('express');
var router = express.Router();
const loginValidator = require('../validations/loginValidator')

const {register,login,processRegister,processLogin} = require('../controllers/usersController');
const notEntry = require ('../middlewares/notEntry')

/* GET users listing. */
router.get('/register',notEntry,register);
router.post('/register',processRegister)

router.get('/login',login);
router.post('/login',loginValidator, processLogin)




module.exports = router;

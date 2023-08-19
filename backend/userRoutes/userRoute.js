const {Router} = require('express')
const { signUp, logIn, getUserDetails } = require('../controllers/userControllers.js');


// now import 3 middlewares and done
// purposefully exported middlewares in different ways.To know all options
const { signupDataValidate } = require('../middlewares/signupDataValidate.js');
const loginDataValidate = require('../middlewares/logInDataVallidate.js');
const { authenticateUser } = require('../middlewares/authenticateUser.js');


const userRouter = Router(); 

userRouter.post('/signup', signupDataValidate ,signUp);
userRouter.post('/login' , loginDataValidate ,logIn);
userRouter.get('/', authenticateUser ,getUserDetails);

module.exports = userRouter 

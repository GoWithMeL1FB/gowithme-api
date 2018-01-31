import express from 'express';
import validate from 'express-validation';
import passport from 'passport';

import { signUpController, loginController } from './authController';
import formValidation from '../../middleware/validation/request-validation';
import '../../middleware/validation/passport';

const passportFacebook = require('../../middleware/validation/socialApps/facebook.js')
const passportGoogle = require('../../middleware/validation/socialApps/google.js')


const router = express.Router();

router.route('/signup')
  .post(validate(formValidation.signUp), signUpController);

router.route('/login')
  .post(validate(formValidation.login), passport.authenticate('local', { session: false}), loginController);

export default router;

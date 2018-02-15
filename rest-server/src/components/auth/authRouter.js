import { signUpController, loginController } from './authController';
import formValidation from '../../middleware/validation/request-validation';
import passportFacebook from '../../middleware/validation/socialApps/facebook';
// import passportGoogle from '../../middleware/validation/socialApps/google';

require('../../middleware/validation/passport');
const express = require('express');
const validate = require('express-validation');
// const passport = require('passport');

const router = express.Router();

router.route('/signup')
  .post(validate(formValidation.signUp), signUpController);

router.route('/login')
  .post(validate(formValidation.login), loginController);

router.route('/test').post(signUpController);

// router.route('/facebook',
//   passportFacebook.authenticate('facebook'));

// router.route('/facebook/callback',
//   passportFacebook.authenticate('facebook', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

// template for passport auth
// router.route('/login')
//   .post(validate(formValidation.login), passport.authenticate('local', { session: false}), loginController);

export default router;

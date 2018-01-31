import express from 'express';
import validate from 'express-validation';
import passport from 'passport';

import { signUpController, loginController } from './authController';
import formValidation from '../../middleware/validation/request-validation';
import '../../middleware/validation/passport';

import passportFacebook from '../../middleware/validation/socialApps/facebook';
import passportGoogle from '../../middleware/validation/socialApps/google';


const router = express.Router();

router.route('/signup')
  .post(validate(formValidation.signUp), signUpController);

router.route('/login')
  .post(validate(formValidation.login), loginController);

// router.route('/facebook',
//   passportFacebook.authenticate('facebook'));

// router.route('/facebook/callback',
//   passportFacebook.authenticate('facebook', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

// router.route('/login')
//   .post(validate(formValidation.login), passport.authenticate('local', { session: false}), loginController);

export default router;

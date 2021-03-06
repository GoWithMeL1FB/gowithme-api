import db from '../../config/database';
import { signUpQuery, loginQuery } from './authQueries';
import { success, error, warning } from '../../lib/logger';
import { generateToken, JWTverification } from '../../middleware/auth/jwt';
import { hashPW, PWVerification } from '../../middleware/auth/bcrypt';
// import { read } from 'fs';

export const signUpController = async (req, res) => {
  try {
    // hash user's password
    req.body.password = await hashPW(req.body.password);
    await signUpQuery(req.body);

    // success('signUpController - signed up with token ');
    delete req.body.password;

    // generate token and send
    const token = await generateToken(req.body.email, req.body.username);
    req.body.token = token;
    return res.status(200).send(req.body.token);
  } catch (err) {
    error(err);
  }
}

export const loginController = async (req, res) => {
  try {
    // retrieves user info and hashed password
    const verification = await loginQuery(req.body);
    const { username, email, hashedPassword } = verification;

    // verify that password is correct
    const isVerified = await PWVerification(req.body.password, hashedPassword);
    delete verification.hashedPassword;

    // if verified, send back info with token attatched
    if (isVerified) {
      const token = await generateToken(username, email);
      verification.token = token;

      // success('loginController - user logged in with token');
      return res.status(200)
        .set('authentication', verification.token.accessToken)
        .set('Access-Control-Expose-Headers','authentication')
        .send(verification);
    } else {
      warning('user failed to login with correct credentials');
      res.status(500).send('password or username does not match');
    }
  } catch (err) {
    error('error while trying to login', err);
  }
}

export const verifyController = async (req, res) => {
  try {
    //verify webtoken
    JWTverification(req)
    //return response

    return res.status(200).send(req.body);
  } catch (err) {
    error('error', err);
  }
}

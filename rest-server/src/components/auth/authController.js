import db from '../../config/database';
import axios from 'axios';
import { signUpQuery, loginQuery } from './authQueries';
import { success, error, warning } from '../../lib/logger';
import { generateToken } from '../../middleware/auth/jwt';
import { hashPW } from '../../middleware/auth/bcrypt';
import { Users } from '../../config/database/models';

export const signUpController = async (req, res) => {
  try {
    req.body.password = await hashPW(req.body.password);
    await signUpQuery(req.body);
    success('signUpController - successfully inserted user data ');
    const token = await generateToken(req.body.email, req.body.username);
    req.body.token = token;
    return res.append('authorization', JSON.stringify(token)).sendStatus(200).send(req.body);
  } catch (err) {
    error('error', err)
  }
}


export const loginController = (req, res) => {
  try {
    Users.find({
      where: {
        username: req.body.username,
      }
    })
      .then(async (user) => {
        console.log('USER', user.dataValues);
        const { username, password, email } = user;
        const token = await generateToken(username, email)
        user.token = token;
        return res.status(200).append('authorization', JSON.stringify(token)).send(user);
      })
  } catch (err) {
    error('failed to login', err);
  }
}

// export const signUpController = async (req, res) => {
//   try {
//     console.log('inside of signup controller', req.body);
//     req.body.password = await hashPassword(req.body.password);
//     const { rows } = await signUpQuery(req.body);
//     const { id, username } = rows[0];
//     success('signUpController - successfully retrieved data ', JSON.stringify(rows[0]));
//     const token = await generateToken(id, email);
//     rows[0].token = token;
//     return res.status(200).append('authorization', JSON.stringify(token)).send(rows[0]);
//   } catch (err) {
//     error('signUpController - error= ', err);
//     throw new Error(err);
//   }
// };

// export const loginController = async (req, res) => {
//   try {
//     console.log('loginController inside')
//     const { rows } = await loginQuery(req.body);
//     delete rows[0].password;
//     const { id, username } = rows[0];
//     success('loginController - successfully retrieved data ', rows[0]);
//     const token = await generateToken(id, email);
//     rows[0].token = token;
//     return res.status(200).append('authorization', JSON.stringify(token)).send(rows[0]);
//   } catch (err) {
//     error('loginController - error= ', err);
//     throw new Error(err);
//   }
// };

// const hashedPass = await hashPW(req.body.password)
// const { email, username, birthday, bio } = req.body
// Users.create({
//   email: email,
//   username: sername,
//   password: hashedPass,
//   birthday: bithday,
//   Bio: bio,
// })
//   .then(() => {
//     success('user is being signed up');
//     warning(generateToken(req.body.username, req.body.email))
//     res.sendStatus(200);
//   })
//   .catch((err) => {
//     error('error signing up user', err);
//     res.sendStatus(500);
//   })
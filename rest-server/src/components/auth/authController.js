import db from '../../config/database';
import axios from 'axios';
import { signUpQuery, loginQuery } from './authQueries';
import { success, error } from '../../lib/logger';
import { generateToken } from '../../middleware/auth/jwt';
import { hashPassword } from '../../middleware/auth/bcrypt';
import { Users } from '../../config/database/models/sync';

export const signUpController = (req, res) => {
  Users.create({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    birthday: req.body.bithday,
    Bio: req.body.bio,
  })
    .then(() => {
      success('user was signup up');
      res.sendStatus(200).send(`${req.body.username} has beed added to db`);
    })
    .catch((err) => {
      error('error signing up user', err);
      res.sendStatus(500);
    })
}

export const loginController = (req, res) => {
  Users.findAll({
    where: {
      username: req.body.username
    }
  })
    .then(() => {
      success('user logged in')
      res.sendStatus(200)
    })
    .catch((err) => {
      error('username and or password did not match any accounts', err)
      res.sendStatus(404).send('username and or password did not match')
    })
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


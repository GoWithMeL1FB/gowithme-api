import db from '../../config/database';
import { signUpQuery, loginQuery } from './authQueries';
import { success, error } from '../../lib/logger';
import { generateToken } from '../../middleware/auth/jwt';
import { hashPW } from '../../middleware/auth/bcrypt';
import { users } from '../../config/database/models';

export const signUpController = async (req, res) => {
  try {
    req.body.password = await hashPW(req.body.password);
    await signUpQuery(req.body);
    success('signUpController - signed up with token ');
    delete req.body.password
    const token = await generateToken(req.body.email, req.body.username);
    req.body.token = token;
    return res.append('authorization', JSON.stringify(token)).status(200).send(req.body);
  } catch (err) {
    error('error', err)
  }
}

export const loginController = (req, res) => {
  try {
    users.find({
      where: {
        username: req.body.username,
      }
    })
      .then(async (user) => {
        const { username, email } = user;
        delete user.dataValues.password;
        const token = await generateToken(username, email)
        user.token = token;
        success('loginController - user logged in with token')
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
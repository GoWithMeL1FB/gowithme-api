import { sign, verify } from 'jsonwebtoken';

export const generateToken = (id, username) => {

  const token = {};

  token.accessToken = sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60), //expires in 1hour
    username,
    id
  }, process.env.TOKEN_SECRET);

  return token;
};

export const JWTverification = (req, res, next) => {
  try {
    // console.log("authorization!!", req.headers.authorization);
    // ALL the user's data need to have the web token saved in their property.
    verify(req.headers.token, process.env.TOKEN_SECRET);
    success('token verified');
    next();
  } catch (e) {
    error('token not verified');
    next(e);
  }
}
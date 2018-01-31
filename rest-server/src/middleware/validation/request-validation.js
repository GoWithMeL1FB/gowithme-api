import Joi from 'joi';

let currentYear = new Date().getFullYear();

export default {
  signUp: {
    body: {
      email: Joi.string().email().required(),
      username: Joi.string().regex(/^[a-zA-Z0-9]{5,15}$/).required(), //username has to be string, mixtures of alphabets and numbers, length betwee 5 to 15
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,15}$/).required(),
      birthday: Joi.number().integer().min(1900).max(2000).required(),
      bio: Joi,
    }
  },
  login: {
    body: {
      username: Joi.string().regex(/^[a-zA-Z0-9]{5,15}$/).required(), //username has to be string, mixtures of alphabets and numbers, length betwee 5 to 15
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,15}$/).required()
    }
  }
}
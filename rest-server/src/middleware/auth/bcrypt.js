import {compare, genSalt, hash} from 'bcrypt';

export const hashPw = async (password) => {
  const salt = await genSalt(JSON.parse())
}
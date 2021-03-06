import { compare, genSalt, hash } from 'bcrypt';

export const hashPW = async (password) => {
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
}

export const PWVerification = async (password, hash) => {
  const result = await compare(password, hash);
  return result;
}
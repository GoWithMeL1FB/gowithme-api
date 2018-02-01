export const updateUserDataHelper = ({ id, birthday, email, username, password }) => {
  return `
    UPDATE users
      SET  email = ${email}, username = ${username}, password = ${password}
      WHERE id = ${id};
  `
}

export const getUserDataHelper = ({ id }) => {
  return `
    SELECT email, username, password, birthday, bio
    FROM users
    WHERE id = ${id};
  `
}

export const getAllUserDataHelper = () => {
  return `
    SELECT *
    FROM users;
  `
}
export const updateUserDataHelper = ({ id, birthday, bio }) => {
  return `
    UPDATE users
      SET  bio = ${bio}, birthday = ${birthday}
      WHERE id = ${id};
  `
}

export const getUserDataHelper = ({ id }) => {
  return `
    SELECT email, username, birthday, bio
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
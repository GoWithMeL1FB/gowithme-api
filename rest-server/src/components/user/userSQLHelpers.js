export const updateUserDataHelper = ({ id, firstname, lastname, username, email, birthday, bio }) => {
  return `
    UPDATE users
      SET   bio = '${bio}',
            birthday = '${birthday}',
            username = '${username}',
            email = '${email}',
            firstname = '${firstname}',
            lastname = '${lastname}'
      WHERE id = ${id};
  `;
}

export const getUserDataHelper = ({ id }) => {
  return `
    SELECT email, username, birthday, bio
    FROM users
    WHERE id = ${id};
  `;
}

export const getAllUserDataHelper = () => {
  return `
    SELECT *
    FROM users;
  `;
}
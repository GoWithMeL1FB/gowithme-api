export const updateUserDataHelper = ({ username, firstname, lastname, email, birthday, bio }) => {
  return `
    UPDATE users
      SET   bio = '${bio}',
            birthday = ${birthday},
            email = '${email}',
            firstname = '${firstname}',
            lastname = '${lastname}'
      WHERE username = '${username}';
  `;
}

export const getUserDataHelper = ({ username }) => {
  return `
    SELECT email, bio, firstname, lastname, birthday, bio
    FROM users
    WHERE username = '${username}';
  `;
}

export const getAllUserDataHelper = () => {
  return `
    SELECT *
    FROM users;
  `;
}
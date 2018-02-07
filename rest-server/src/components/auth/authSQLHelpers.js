export const signUpHelper = ({ email, username, birthday, bio, firstname, lastname }) => {
  return `
    INSERT INTO users (email, username, birthday, bio, firstname, lastname)
    VALUES ('${email}', '${username}', '${birthday}', '${bio}', '${firstname}', '${lastname}')
  `;
};

export const getUserIDHelper = ({ username, email }) => {
  return`
    SELECT id
    FROM users
    WHERE username = '${username}' AND email = '${email}'
  `;
};

export const storePasswordHelper = ({password}, {id}) => {
  return `
    REPLACE INTO credentials ( hashedPassword, user_ID )
    VALUES ('${password}', '${id}')
  `
};

export const loginHelper = ({ username }) => {
  return `
    SELECT id, username, email
    FROM users
    WHERE username = '${username}'
  `;
};

export const findDbPasswordHelper = ({ id }) => {
  return `
    SELECT hashedPassword
    FROM credentials
    WHERE user_ID = '${id}'
  `;
}
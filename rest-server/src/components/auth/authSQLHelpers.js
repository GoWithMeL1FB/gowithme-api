export const signUpHelper = ({ email, username, birthday, bio}) => {
  return `
    INSERT INTO users (email, username, birthday, bio)
    VALUES ('${email}', '${username}', '${birthday}', '${bio}')
  `;
};

export const getUserIDHelper = ({ username, email }) => {
  return`
    SELECT id
    FROM users
    WHERE username = '${username}' AND email = '${email}'
  `
};

export const storePasswordHelper = ({password}, {id}) => {
  return `
    INSERT INTO credentials ( hashedPassword, user_ID )
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
  `
}
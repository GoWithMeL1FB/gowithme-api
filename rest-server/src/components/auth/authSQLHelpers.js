export const signUpHelper = ({ email, username, password, birthday}) => {
  return `
    INSERT INTO users (email, username, password, birthday)
    VALUES ('${email}', '${username}', '${password}', ${birthday})
  `;
};

export const loginHelper = ({ username }) => {
  return `
    SELECT id, email, username, password
    FROM users
    WHERE email='${username}'
  `;
};

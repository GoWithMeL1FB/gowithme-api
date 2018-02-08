import db from '../../config/database';
import { success } from '../../lib/logger';

// seed database
export const createUser = async () => {
  try {
    await db.query(
      `
        INSERT INTO users (firstname, lastname, email, username, birthday, bio)
        VALUES ('kevin', 'vo', 'kevin123@google.com', 'kevinvoduy', 1992, 'Has a baby pitbull' )
      `
    )
    success('Seed - successfully seeded database with a user')
  } catch (err) {
    throw new Error('Seed - could not create user', err);
  }
}
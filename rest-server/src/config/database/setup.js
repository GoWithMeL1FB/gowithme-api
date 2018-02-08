import {
  createDatabase,
  createUsersTable,
  createCategoriesTable,
  createCommentsTable,
  createCategoryJoinTable,
  createRatingTable,
  createCredentialsTable,
  dropDatabase,
  dropUserTable,
  dropCategoriesTable,
  dropCommentsTable,
  dropCategoryJoinTable,
  dropRatingTable,
  dropCredentialsTable,
  useDatabase,
} from '../../lib/SQL';

import { createUser } from '../../lib/seed';


const setup = async () => {
  // await dropDatabase();
  await dropCredentialsTable();
  await dropUserTable();
  // await dropCategoriesTable();
  // await dropCategoryJoinTable();
  // await dropCommentsTable();
  // await dropRatingTable();
  // await createDatabase();
  await createUsersTable();
  await createCredentialsTable();
  // await createCategoriesTable();
  // await createCategoryJoinTable();
  // await createCommentsTable();
  // await createRatingTable();
  await createUser();
  process.exit();
};

setup();

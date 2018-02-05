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


const setup = async () => {
  // await dropDatabase();
  // await dropCredentialsTable();
  // await dropUserTable();
  // await dropCategoriesTable();
  // await dropCategoryJoinTable();
  // await dropCommentsTable();
  // await dropRatingTable();
  // await createDatabase();
  await createUsersTable();
  // await createCategoriesTable();
  // await createCategoryJoinTable();
  // await createCommentsTable();
  // await createRatingTable();
  await createCredentialsTable();
  process.exit();
};

setup();

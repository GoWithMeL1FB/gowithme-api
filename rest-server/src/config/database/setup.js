import {
  createDatabase,
  createUsersTable,
  createCategoriesTable,
  createCommentsTable,
  createCategoryJoinTable,
  createRatingTable,
  dropDatabase,
  dropUserTable,
  dropCategoriesTable,
  dropCommentsTable,
  dropCategoryJoinTable,
  dropRatingTable,
  useDatabase,
} from '../../lib/SQL';


const setup = async () => {
  await dropDatabase();
  await dropUserTable();
  await dropCategoriesTable();
  await dropCategoryJoinTable();
  await dropCommentsTable();
  await dropRatingTable();
  await createDatabase();
  await createUserTable();
  await createCategoriesTable();
  await createCategoryJoinTable();
  await createCommentsTable();
  await createRatingTable();
  process.exit();
};

setup();

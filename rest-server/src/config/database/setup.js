import {
  // create tables
  createDatabase,
  useDatabase,
  createUserTable,
  // dropping tables
  dropUserTable,
  dropDatabase

} from '../../lib/SQL'

const setup = async () => {
  // create tables & db
  await createDatabase();
  await userDatabse();
  await createUserTable();
  // drop tables and db
  await dropUserTable();
  await dropDatabase();

  process.exit();
};

// setup();



// do we need this ^^ ?!??????!?!!?!?????
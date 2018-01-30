require('dotenv').config();

import db from '../../config/database';
import { success, error } from '../logger';

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;
// do not use queryAsync:{
// database SQL statements to create, drop, and use a database
// export const createDatabase = async () => {
//   try {
//     await db.queryAsync(
//       `CREATE DATABASE ${database}`
//     );
//     success('successfully created database ', database);
//   } catch (err) {
//     error('error creating database ', err)
//   }
// };

// export const useDatabase = async () => {
//   try {
//     await db.queryAsync(
//       `USE IF EXISTS ${database}`
//     );
//     success('successfully using database ', database);
//   } catch (err) {
//     error('error using database ', err);
//   }
// };

// export const dropDatabase = async () => {
//   try {
//     await db.queryAsync(
//       `DROP DATABASE IF EXISTS ${database}`
//     );
//     success('successfully dropped database ', database);
//   } catch (err) {
//     error('error dropping database ', database)
//   }
// }

// // user table: creation and delete
// export const createUserTable = async () => {
//   try {
//     await db.queryAsync(
//       `CREATE TABLE IF NOT EXISTS users
//       (
//         id SERIAL,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         username VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) UNIQUE NOT NULL,
//         Bio VARCHAR(255)
//       )
//       `
//     );
//     success('successfully created user table')
//   } catch (err) {
//     error('error creating user table ', err)
//   }
// };

// export const dropUserTable = async () => {
//   try {
//     await db.queryAsync(
//       `DROP TABLE IF EXISTS users`
//     );
//     success('successfully dropped user table')
//   } catch (err) {
//     error('error dropping user table ', err)
//   }
// }
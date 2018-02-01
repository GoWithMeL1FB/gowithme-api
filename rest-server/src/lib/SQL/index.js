import db from "../../config/database";

import {
  success,
  error
} from '../logger';
// database SQL statements to create, drop, and use a database
export const createDatabase = async () => {
  try {
    await db.queryAsync(
      `CREATE DATABASE GoWithMe`
    );
    success('successfully created database gowithme');
  } catch (err) {
    error('error creating database ', err);
  }
};


export const dropDatabase = async () => {
  try {
    await db.queryAsync(
      `DROP DATABASE IF EXISTS GoWithMe`
    );
    success('successfully dropped database gowithme');
  } catch (err) {
    error('error dropping database ', err);
  }
};

export const useDatabase = async () => {
  try {
    await db.queryAsync(
      `USE IF EXISTS GoWithMe`
    );
    success('successfully using database gowithme');
  } catch (err) {
    error('error using database ', err);
  }
};


export const createUsersTable = async() => {
  try {
  await  db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS Users (
        id int NOT NULL,
        username varchar(255) NOT NULL UNIQUE,
        password varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        bio TEXT NOT NULL,
        interests TEXT NOT NULL
      )
      `
    )
    success('successfully created friends table');
  } catch (err) {
    error('error creating friends table ', err);
  }
};

export const dropUserTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS users`
    );
    success('successfully dropped users table');
  } catch (err) {
    error('error dropping users table ', err);
  }
};

export const createCategoriesTable = async() => {
  try {
   await db.queryAsync(
`CREATE TABLE categories (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL UNIQUE,
	PRIMARY KEY (id)
)`
    )
    success('successfully created friends table');
  } catch (err) {
    error('error creating friends table ', err);
  }
};

export const dropCategoriesTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS categories`
    );
    success('successfully dropped categories table');
  } catch (err) {
    error('error dropping categories table ', err);
  }
};

export const createCommentsTable = async() => {
  try {
    await db.queryAsync(
`CREATE TABLE comments (
	id INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL,
	text TEXT NOT NULL,
	dateCourse_id INT NOT NULL,
	PRIMARY KEY (id)
)`
    )
    success('successfully created friends table');
  } catch (err) {
    error('error creating friends table ', err);
  }
};

export const dropCommentsTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS comments`
    );
    success('successfully dropped comments table');
  } catch (err) {
    error('error dropping comments table ', err);
  }
};

export const createCategoryJoinTable = async() => {
  try {
    await db.queryAsync(
`CREATE TABLE categoryJoin (
	user_id INT,
	category VARCHAR(255) NOT NULL,
	mark_type INT NOT NULL,
	event_id INT
)`
  )
  success('successfully created categoryJoin table');
  } catch (err) {
    error('error creating categoryJoin table ', err);
  }
};

export const dropCategoryJoinTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS categoryJoin`
    );
    success('successfully dropped categoryJoin table');
  } catch (err) {
    error('error dropping categoryJoin table ', err);
  }
};

export const createRatingTable = async() => {
  try {
    await db.queryAsync(
`CREATE TABLE rating (
	user_id INT NOT NULL,
	dateCourse INT NOT NULL,
	rating INT NOT NULL
)`
  )
  success('successfully created rating table');
  } catch (err) {
    error('error creating rating table ', err);
  }
};
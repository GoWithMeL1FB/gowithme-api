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
    success('successfully created database GoWithMe');
  } catch (err) {
    error('error creating database ', err);
  }
};

export const dropDatabase = async () => {
  try {
    await db.queryAsync(
      `DROP DATABASE IF EXISTS GoWithMe`
    );
    success('successfully dropped database GoWithMe');
  } catch (err) {
    error('error dropping database ', err);
  }
};

export const useDatabase = async () => {
  try {
    await db.queryAsync(
      `USE IF EXISTS GoWithMe`
    );
    success('successfully using database GoWithMe');
  } catch (err) {
    error('error using database ', err);
  }
};


export const createUsersTable = async () => {
  try {
  await db.query(
      `
      CREATE TABLE IF NOT EXISTS users
      (
        id int(11) NOT NULL AUTO_INCREMENT,
        firstname varchar(255) NOT NULL,
        lastname varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        username varchar(255) NOT NULL,
        birthday int(11) DEFAULT NULL,
        bio varchar(255) DEFAULT NULL,
        createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        UNIQUE KEY username (username),
        UNIQUE KEY users_username_unique (username)
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
    `
    CREATE TABLE categories
    (
      id INT NOT NULL AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL UNIQUE,
      PRIMARY KEY (id)
    )
    `
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
      `
      CREATE TABLE comments
      (
        id INT NOT NULL AUTO_INCREMENT,
        user_id INT NOT NULL,
        text TEXT NOT NULL,
        dateCourse_id INT NOT NULL,
        PRIMARY KEY (id)
      )
      `
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
    `
    CREATE TABLE categoryJoin
    (
      user_id INT,
      category VARCHAR(255) NOT NULL,
      mark_type INT NOT NULL,
      event_id INT
    )
    `
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
      `
        CREATE TABLE rating
        (
          user_id INT NOT NULL,
          dateCourse INT NOT NULL,
          rating INT NOT NULL
        )
      `
    );
    success('successfully created rating table');
  } catch (err) {
    error('error creating rating table ', err);
  }
};

export const createCredentialsTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE credentials
      (
        id int unsigned NOT NULL AUTO_INCREMENT,
        hashedPassword varchar(255) NOT NULL,
        user_ID int NOT NULL,
        createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        UNIQUE KEY hashedPassword (hashedPassword),
        UNIQUE KEY credentials_hashedPassword_unique (hashedPassword),
        KEY user_ID (user_ID),
        CONSTRAINT credentials_ibfk_1 FOREIGN KEY (user_ID) REFERENCES users (id) ON DELETE CASCADE
      )
      `
    );
    success('successfully crated credentials table');
  } catch (err) {
    error('error creating credentials table', err);
  }
};

export const dropCredentialsTable = async () => {
  try {
    await db.queryAsync(
      `
        DROP TABLE IF EXISTS credentials
      `
    )
    success('successfully droped credentials table');
  } catch (err) {
    error('error dropping credentials table', err);
  }
};
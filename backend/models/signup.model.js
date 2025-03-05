import { db } from '../config/db.js';

export const createSignupTable = async () => {
  try {
    await db.promise().query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(15) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `);
    console.log("Users table created successfully.");
  } catch (err) {
    console.error("Error creating users table:", err);
  }
};


export const createSignupTableForBusiness = async () => {
  try {
    await db.promise().query(`
      CREATE TABLE IF NOT EXISTS business (
        id INT AUTO_INCREMENT PRIMARY KEY,
        vendor_name VARCHAR(255) NOT NULL,
        brand_name VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(15) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `);
    console.log("Business table created successfully.");
  } catch (err) {
    console.error("Error creating business table:", err);
  }
};

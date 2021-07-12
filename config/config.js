require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: null,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      debug: true
    }
  },
  test: {
    username: process.env.DB_USER,
    password: null,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      debug: true
    }
  },
  production: {
    username: process.env.DB_USER,
    password: null,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      debug: true
    }
  }
}

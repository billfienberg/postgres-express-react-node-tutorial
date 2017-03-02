require('dotenv').config()

module.exports = {
  "development": {
    "dialect": process.env.DATABASE_DIALECT,
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "host": process.env.DATABASE_HOST,
    "port": process.env.DATABASE_PORT,
    "database": process.env.DATABASE_NAME
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "todos-test",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "post": 5432,
    "dialect": "postgres"
  }
}

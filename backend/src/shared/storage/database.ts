import Knex from 'knex';

const db = Knex({
  client: 'mysql2',
  connection: {
    host : process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user:     process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
});

export default db;
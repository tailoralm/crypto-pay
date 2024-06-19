export default {
  development: {
    client: 'mysql2',
    connection: {
      host : 'mysql_db',
      database: 'mydatabase',
      user:     'user',
      password: process.env.MYSQL_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'mysql2',
    connection: {
      host : 'mysql_db',
      database: 'mydatabase',
      user:     'user',
      password: process.env.MYSQL_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

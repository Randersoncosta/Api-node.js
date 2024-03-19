const knex = require('knex')({
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5433,
      user: 'postgres',
      password: '123456',
      database: 'orquestra',
    },
  });

  module.exports = knex
  
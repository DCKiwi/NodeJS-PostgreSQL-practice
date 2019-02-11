const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'lnrdivbxwlfmbw',
  host: 'ec2-107-20-167-11.compute-1.amazonaws.com',
  database: 'd6kei4fl9thl84',
  password: '1236bb310aafe166eda345a380a5476c1ed66df24c516a1104da7f12960bdf6c',
  port: 5432,
  ssl: true
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});

const client = new Client({
  user: 'lnrdivbxwlfmbw',
  host: 'ec2-107-20-167-11.compute-1.amazonaws.com',
  database: 'd6kei4fl9thl84',
  password: '1236bb310aafe166eda345a380a5476c1ed66df24c516a1104da7f12960bdf6c',
  port: 5432,
  ssl: true
});
client.connect();

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});

// //Connect to DB
// const pool = new Pool({
//   user: 'user1',
//   host: 'localhost',
//   database: 'inventorydb',
//   password: 'user1',
//   port: 5432
// });

// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err);
//   process.exit(-1);
// });

// const client = new Client({
//   user: 'user1',
//   host: 'localhost',
//   database: 'inventorydb',
//   password: 'user1',
//   port: 5432
// });
// client.connect();

module.exports = {
  pool,
  client
};

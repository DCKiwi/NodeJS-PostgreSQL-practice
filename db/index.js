const { Pool, Client } = require('pg');

//Connect to DB
const pool = new Pool({
  user: 'user1',
  host: 'localhost',
  database: 'inventorydb',
  password: 'user1',
  port: 5432
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

const client = new Client({
  user: 'user1',
  host: 'localhost',
  database: 'inventorydb',
  password: 'user1',
  port: 5432
});

client.connect();

module.exports = {
  pool,
  client
};

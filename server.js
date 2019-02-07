const express = require('express');
const { Pool, Client } = require('pg');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to DB
const pool = new Pool({
  user: 'user1',
  host: 'localhost',
  database: 'inventorydb',
  password: 'user1',
  port: 5432
});

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

const client = new Client({
  user: 'user1',
  host: 'localhost',
  database: 'inventorydb',
  password: 'user1',
  port: 5432
});
client.connect();

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   client.end();
// });

// client.query('SELECT * FROM shirts', (err, res) => {
//   if (err) {
//     return err;
//   }
//   console.log(res.rows);
// });

// const text = 'INSERT INTO shirts VALUES($1, $2, $3, $4) '

async function view() {
  try {
    const res = await client.query('SELECT * FROM shirts');
    console.log(res.rows);
  } catch (err) {
    console.log(err.stack);
  }
}

view();

app.get(
  '/',
  (req, res) => {
    res.send('Hello World');
  },
  e => {
    res.send(400).send(e);
  }
);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));

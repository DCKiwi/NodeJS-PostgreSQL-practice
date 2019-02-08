const { pool, client } = require('./index');

async function view() {
  try {
    const res = await pool.query('SELECT * FROM shirts');
    return res.rows;
  } catch (err) {
    console.log(err.stack);
  }
}

module.exports = {
  view: view()
  // queryPool: (text, params) => pool.query(text, params),
  // queryClient: (text, params) => client.query(text, params)
};

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
// const { view } = require('./db/queries');
const db = require('./db');

// Init app
const app = express();

// EJS Template engine
app.set('view engine', 'ejs');

// //Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const queryResponse = view.then(res => {
//   res.rows;
//   console.log(res.rows);
// });

// console.log(queryResponse);

async function view() {
  try {
    const res = await db.query('SELECT * FROM shirts');
    // console.log(res.rows);
    return res.rows;
  } catch (err) {
    console.log(err.stack);
  }
}
const foo = '';
// view().then(res => console.log(res));
view().then(res => {
  foo = res;
});

console.log(foo);

app.get('/', (req, res) => res.render('index'));

// app.get(
//   '/',
//   (req, res) => {
// const queryResponse = view.then(res => {
//   res.rows;
//   // console.log(res.rows);
// });
// // console.log(queryResponse);
// res.json(queryResponse);
// // console.log(
// //   view.then(res => {
// //     console.log(res.rows);
// //   })
// // );
// // res.json(view.then());
//   },
//   e => {
//     res.send(400).send(e);
//   }
// );

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));

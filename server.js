const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const { view } = require('./db/queries');

// Init app
const app = express();

// EJS Template engine
app.set('view engine', 'ejs');

// //Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

view.then(q => console.log(q));

app.get('/', (req, res) => {
  view.then(query => {
    res.render('index', { data: query });
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));

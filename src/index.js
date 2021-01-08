const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes/index.js');
const db = require('./config/db');

// connect db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
// app.use(morgan('combined'))

app.set('views', path.join(__dirname, 'resources', 'views'));

// route init khởi tạo tuyến đường
route(app);

app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);

app.set('view engine', 'hbs');

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

const newsRouter = require('./news');
const siteRouter = require('./site');
const personRouter = require('./person');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/person', personRouter);
  app.use('/', siteRouter);

  // app.get('/', (req, res) => {
  //     res.render('home')
  //   })

  // //   app.get('/news', (req, res) => {
  // //     res.render('news')
  // //   })

  // app.get('/search', (req, res) => {
  //     res.render('search')
  // })
}

module.exports = route;

const newsRouter = require('./news');
const siteRouter = require('./site');
const personRouter = require('./person');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/person', personRouter);
  app.use('/', siteRouter);
}

module.exports = route;

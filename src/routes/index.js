const newsRouter = require('./news');
const siteRouter = require('./site');
const personRouter = require('./person');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
  app.use('/courses', coursesRouter);
  app.use('/news', newsRouter);
  app.use('/person', personRouter);
  app.use('/me', meRouter);
  app.use('/', siteRouter);
}

module.exports = route;

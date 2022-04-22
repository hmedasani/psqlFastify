const fastify = require('fastify');
const db = require('./plugin/database');
const tempRoute = require('./routes/temp');

const build = (options = {}) => {
  const app = fastify(options);

  //register plugins
  app.register(db);

  //register route
  app.register(tempRoute, { prefix: '/api/v1/test' });

  app.get('/', async (req, res) => {
    res.code(200).send({
      message: 'Hello World!',
    });
  });

  return app;
};

module.exports = build;

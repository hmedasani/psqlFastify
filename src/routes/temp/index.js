const route = async (fastify) => {
  //GET route
  fastify.get('/', async (req, res) => {});
  //POST route
  fastify.post('/', async (req, res) => {
    fastify.log.info(`request with body ${req}`);
    const { title } = req.body;

    const id = await fastify.db.one(
      'INSERT INTO test(title) VALUES($1) RETURNING id',
      [title]
    );

    res.code(201).send(id);
  });
};

module.exports = route;

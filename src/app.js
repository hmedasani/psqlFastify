const fastify = require('fastify')

const build = (options = {}) => {
  const app = fastify(options)

  app.get('/', async (req, res) => {
    res.code(200).send({
      message: 'Hello World!',
    })
  })

  return app
}

module.exports = build

const port = process.env.PORT || 5000;
const server = require('./src/app')({
  logger: {
    level: 'info',
    prettyPrint: true,
  },
});

const start = async () => {
  try {
    await server.listen(port, '0.0.0.0');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();

import models from './models';
import app from './index';
import PositionRoutes from './config/routes/PositionRoutes';

const PORT = process.env.SERVER_PORT;

app.register(PositionRoutes, { prefix: '/positions' });

models.sequelize.sync().then(async () => {
  try {
    await app.listen(PORT);
    app.log.info(`Server listening on ${app.server.address().port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
});

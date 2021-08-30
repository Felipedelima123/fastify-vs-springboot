import PositionsController from '../../controllers/PositionsController';

const positionsController = new PositionsController();

export default (fastify, opts, done) => {
  fastify.post('/', opts, (request, reply) => positionsController.create(request, reply));
  done();
};

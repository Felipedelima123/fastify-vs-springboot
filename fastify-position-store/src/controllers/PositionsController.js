import PositionsService from '../services/PositionsService';

export default class PositionsController {
  constructor() {
    this.positionsService = new PositionsService();
  }

  async create(request, reply) {
    const positionCreated = await this.positionsService.create(request.body);
    if (positionCreated.reject) {
      return reply.status(500).send(positionCreated);
    }
    return reply.send(positionCreated);
  }
}

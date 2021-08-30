import PositionsRepository from '../repositories/PositionsRepository';

export default class PositionsService {
  constructor() {
    this.positionsRepository = new PositionsRepository();
  }

  async create(position) {
    try {
      const positionCreated = await this.positionsRepository.create(position);
      return positionCreated;
    } catch (error) {
      return { message: 'Something went wrong', status: false, reject: true };
    }
  }
}

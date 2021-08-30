import models from '../models';

export default class PositionsRepository {
  constructor() {
    this.db = models.Position;
    this.sequelize = models.sequelize;
    this.Op = models.Sequelize.Op;
  }

  async create(position) {
    return this.db.create({
      eventDate: position.eventDate,
      equipamentDate: position.equipamentDate,
      latitude: position.latitude,
      longitude: position.longitude,
      speed: position.speed,
      licensePlate: position.licensePlate,
    });
  }
}

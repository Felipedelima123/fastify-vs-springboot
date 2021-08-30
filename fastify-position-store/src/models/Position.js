import { Model } from 'sequelize';

export default class SendQueueItem extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        eventDate: { type: DataTypes.DATE },
        equipamentDate: { type: DataTypes.DATE },
        latitude: { type: DataTypes['DOUBLE PRECISION'] },
        longitude: { type: DataTypes['DOUBLE PRECISION'] },
        speed: { type: DataTypes.DECIMAL },
        licensePlate: { type: DataTypes.STRING(8) },
      },
      { tableName: 'positions', sequelize, underscored: true },
    );
  }
}

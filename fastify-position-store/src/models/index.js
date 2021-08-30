import Sequelize from 'sequelize';
import Console from 'console';
import { config } from 'dotenv';

// models
import Position from './Position';

config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const databaseUrl = process.env.DB_URL;

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  underscored: true,
  freezeTableName: true,
  logging: () => {},
});

sequelize
  .authenticate()
  .then(() => {
    Console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    Console.error('Unable to connect to the database:', err);
  });

const models = {
  Position: Position.init(sequelize, Sequelize),
};

Object.values(models)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(models));

const db = {
  ...models,
  sequelize,
  Sequelize,
};

export default db;

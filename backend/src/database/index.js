import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import Event from '../app/models/Event';

import databaseConfig from '../config/database';

class Database {
  constructor() {
    this.init();
    this.mongo();
  }
  
  init() {
    this.connection = new Sequelize(databaseConfig);
    Event.init(this.connection);
  }

  mongo() {
    this.mongo.connection = mongoose.connect(
      'mongodb+srv://ellian:tokenlab@cluster0-abdlf.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      }
    );
  }
}

export default new Database();
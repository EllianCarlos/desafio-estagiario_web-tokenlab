import Sequelize, { Model, DataTypes } from 'sequelize';

'use strict';

// module.exports = (sequelize, DataTypes) => {
//   const Events = sequelize.define('Events', {
//     creator: DataTypes.STRING,
//     start: DataTypes.DATE,
//     end: DataTypes.DATE,
//     full_day: DataTypes.BOOLEAN, 
//     description: DataTypes.TEXT
//   }, {});
//   Events.associate = function(models) {
//     // associations can be defined here
//   };
//   return Events;
// };

class Event extends Model {
  static init(sequelize) {
    super.init(
      {
        creator: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        start: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        end: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        full_day: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize: sequelize,
        modelName: 'Event',
        tableName:'events',
        freezeTableName: true,
      }
    );

    return this;
  }
}

export default Event;
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teste = sequelize.define('Teste', {
    teste: DataTypes.TEXT
  }, {});
  Teste.associate = function(models) {
    // associations can be defined here
  };
  return Teste;
};
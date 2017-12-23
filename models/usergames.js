'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserGames = sequelize.define('UserGames', {
    user_uuid: DataTypes.STRING,
    game_uuid: DataTypes.STRING,
    status: DataTypes.STRING,
      price: DataTypes.INTEGER,
      image_url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserGames;
};
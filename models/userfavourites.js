'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserFavourites = sequelize.define('UserFavourites', {
    user_uuid: DataTypes.STRING,
    game_uuid: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserFavourites;
};
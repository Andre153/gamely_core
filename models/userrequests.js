'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserRequests = sequelize.define('UserRequests', {
    game_uuid: DataTypes.STRING,
    user_uuid: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserRequests;
};
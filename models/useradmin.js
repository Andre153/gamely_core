'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserAdmin = sequelize.define('UserAdmin', {
    user_uuid: DataTypes.STRING,
    followers: DataTypes.INTEGER,
    favourites: DataTypes.INTEGER,
    games_added: DataTypes.INTEGER,
    games_sold: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserAdmin;
};
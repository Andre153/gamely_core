'use strict';
module.exports = function(sequelize, DataTypes) {
  var CoreUser = sequelize.define('CoreUser', {
    uuid: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.INTEGER,
    location: DataTypes.STRING,
    token: DataTypes.STRING,
      profilePicture: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return CoreUser;
};
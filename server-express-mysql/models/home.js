'use strict';
module.exports = (sequelize, DataTypes) => {
  var homes = sequelize.define(
    'home',
    {
      homeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      },
      Username: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );
  return homes;
};
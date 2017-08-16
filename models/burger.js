'use strict';

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devaured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
    date: {
      type: DataTypes.DATE,
      // defaultValue: "CURRENT_TIME"
    }
  });
  return Burger;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shoes.belongsTo(models.Owner, {
        foreignKey: 'ownerId'
      })
    }
  }
  Shoes.init({
    brand: DataTypes.STRING,
    name: DataTypes.STRING,
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Owners',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Shoes',
  });
  return Shoes;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Subcategorias.hasOne(models.Categorias, {
        foreignKey: 'categoria_id'
      })
      Subcategorias.belongsTo(models.Posts, {
        foreignKey: 'subcategoria_id'
      })
    }
  }
  Subcategorias.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subcategorias',
  });
  return Subcategorias;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subcategorias = sequelize.define('Subcategorias', {
    title: DataTypes.STRING
  }, {});
  Subcategorias.associate = function(models) {
    Subcategorias.hasMany(models.Posts, {
      foreignKey: 'subcategory_title'
    })
    Subcategorias.belongsTo(models.Categorias, {
      foreignKey: 'category_title'
    })
  };
  return Subcategorias;
};
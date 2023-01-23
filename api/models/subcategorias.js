'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subcategorias = sequelize.define('Subcategorias', {
    title: DataTypes.STRING
  }, {});
  Subcategorias.associate = function(models) {
    Subcategorias.hasMany(models.Posts, {
      foreignKey: 'subcategoria_title'
    })
    Subcategorias.belongsTo(models.Categorias, {
      foreignKey: 'categoria_title'
    })
  };
  return Subcategorias;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categorias = sequelize.define('Categorias', {
    title: DataTypes.STRING
  }, {});
  Categorias.associate = function(models) {
    Categorias.hasMany(models.Subcategorias, {
      foreignKey: 'categoria_title'
    })
  };
  return Categorias;
};
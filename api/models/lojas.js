'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lojas = sequelize.define('Lojas', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    text: DataTypes.STRING,
    url_store: DataTypes.STRING
  }, {});
  Lojas.associate = function(models) {
    Lojas.belongsTo(models.Subcategorias, {
      foreignKey: 'subcategoria_title'
    })
  };
  return Lojas;
};
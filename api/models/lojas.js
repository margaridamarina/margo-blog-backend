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
      foreignKey: 'subcategory_title'
    })
    Lojas.belongsTo(models.Categorias, {
      foreignKey: 'category_title'
    })
  };
  return Lojas;
};
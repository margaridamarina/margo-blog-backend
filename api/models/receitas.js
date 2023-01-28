'use strict';
module.exports = (sequelize, DataTypes) => {
  const Receitas = sequelize.define('Receitas', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    text: DataTypes.STRING
  }, {});
  Receitas.associate = function(models) {
    Receitas.belongsTo(models.Subcategorias, {
      foreignKey: 'subcategory_title'
    })
  };
  return Receitas;
};
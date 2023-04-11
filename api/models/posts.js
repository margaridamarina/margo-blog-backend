'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    text: DataTypes.STRING
  }, {});
  Posts.associate = function(models) {
    Posts.belongsTo(models.Subcategorias, {
      foreignKey: 'subcategory_title'
    })
    Posts.belongsTo(models.Categorias, {
      foreignKey: 'category_title'
    })
  };
  return Posts;
};
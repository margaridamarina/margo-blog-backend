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
  };
  return Posts;
};
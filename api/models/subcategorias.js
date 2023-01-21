// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   class Subcategorias extends Model {
//     static associate(models) {
//       Subcategorias.hasOne(models.Categorias, {
//         foreignKey: 'categoria_id'
//       })
//       Subcategorias.belongsTo(models.Posts, {
//         foreignKey: 'subcategoria_id'
//       })
//     }
//   }
//   Subcategorias.init({
//     title: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Subcategorias',
//   });
//   return Subcategorias;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subcategorias = sequelize.define('Subcategorias', {
    title: DataTypes.STRING
  }, {});
  Subcategorias.associate = function(models) {
    Subcategorias.hasMany(models.Posts, {
      foreignKey: 'subcategoria_id'
    })
    Subcategorias.belongsTo(models.Categorias, {
      foreignKey: 'categoria_id'
    })
  };
  return Subcategorias;
};
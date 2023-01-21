// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   class Categorias extends Model {
//     static associate(models) {
//       Categorias.belongsTo(models.Subcategorias, {
//         foreignKey: 'categoria_id'
//       })
//     }
//   }
//   Categorias.init({
//     title: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Categorias',
//   });
//   return Categorias;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categorias = sequelize.define('Categorias', {
    title: DataTypes.STRING
  }, {});
  Categorias.associate = function(models) {
    Categorias.hasMany(models.Subcategorias, {
      foreignKey: 'categoria_id'
    })
  };
  return Categorias;
};
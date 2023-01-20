module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Subcategorias', [
			{
				title: 'Reciclagem',
        categoria_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				title: 'Saudável',
        categoria_id: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				title: 'Meditação',
        categoria_id: 3,      
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				title: 'Green tech',
        categoria_id: 4,
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Subcategorias', null, {})
  }
}

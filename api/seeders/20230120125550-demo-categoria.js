module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Categorias', [
			{
				id: 1,
				title: 'Sustentabilidade',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 2,
				title: 'Culinária',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 3,
				title: 'Zen',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 4,
				title: 'Tecnologia',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Categorias', null, {})
  }
}

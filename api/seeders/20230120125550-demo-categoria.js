module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Categorias', [
			{
				title: 'Sustentabilidade',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				title: 'Culinária',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				title: 'Zen',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
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

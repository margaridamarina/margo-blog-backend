module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Subcategorias', [
			{
				id: 1,
				title: 'Reciclagem',
        		category_title: 'Sustentabilidade',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 3,
				title: 'Meditação',
        		category_title: 'Zen',				
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 4,
				title: 'Green Tech',
        		category_title: 'Tecnologia',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 5,
				title: 'Moda sustentável',
        		category_title: 'Sustentabilidade',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 6,
				title: 'Corpo e casa',
        		category_title: 'Limpeza',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 7,
				title: 'Casa',
        		category_title: 'Receitas',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 8,
				title: 'Corpo',
        		category_title: 'Receitas',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 9,
				title: 'Culinária',
        		category_title: 'Receitas',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Subcategorias', null, {})
  }
}

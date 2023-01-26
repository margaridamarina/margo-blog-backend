module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Subcategorias', [
			{
				id: 1,
				title: 'Reciclagem',
        		categoria_title: 'Sustentabilidade',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 3,
				title: 'Meditação',
        		categoria_title: 'Zen',				
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 4,
				title: 'GreenTech',
        		categoria_title: 'Tecnologia',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 5,
				title: 'Moda sustentável',
        		categoria_title: 'Sustentabilidade',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 6,
				title: 'Corpo e casa',
        		categoria_title: 'Limpeza',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 7,
				title: 'Casa',
        		categoria_title: 'Receitas',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 8,
				title: 'Corpo',
        		categoria_title: 'Receitas',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: 9,
				title: 'Culinária',
        		categoria_title: 'Receitas',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Subcategorias', null, {})
  }
}

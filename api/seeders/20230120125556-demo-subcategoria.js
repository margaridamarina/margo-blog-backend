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
				id: 2,
				title: 'Saudável',
        		categoria_title: 'Culinária',
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
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Subcategorias', null, {})
  }
}

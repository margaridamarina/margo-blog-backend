module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Posts', [
			{
				title: 'Sustentabilidade é vida',
				image: 'arvore.com.br',
				description: 'Cuidar do mundo é tudo',
				text: 'Era uma vez uma árvore',
        subcategoria_id: 1,
        createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				title: 'Cozinhar é vida',
				image: 'comida.com.br',
				description: 'Comer, comer',
				text: 'Comer é muito bom',
        subcategoria_id: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				title: 'Meditar é vida',
				image: 'ohm.com.br',
				description: 'Vamos meditar',
				text: 'Imagine um rio que corre',
        subcategoria_id: 3,
        createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				title: 'Tecnologia verde',
				image: 'internet.com.br',
				description: 'Tech é green, tech é pop',
				text: 'Salve o mundo através de linhas de código',
        subcategoria_id: 4,
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Posts', null, {})
  }
}

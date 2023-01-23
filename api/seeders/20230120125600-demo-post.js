module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Posts', [
			{
				title: 'Sustentabilidade é vida',
				image: 'https://abrafati.com.br/wp-content/uploads/2022/05/abrafati-sustentabilidade-ilustracao1.png',
				description: 'Cuidar do mundo é tudo',
				text: 'Era uma vez uma árvore',
				subcategoria_title: 'Reciclagem',
        		createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				title: 'Cozinhar é vida',
				image: 'https://img.freepik.com/vetores-premium/conceito-de-comida-saudavel-legumes-frutas-ilustracao-vetorial-de-agua-e-leite_36358-307.jpg?w=2000',
				description: 'Comer, comer',
				text: 'Comer é muito bom',
				subcategoria_title: 'Saudável',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				title: 'Meditar é vida',
				image: 'https://img.freepik.com/vetores-gratis/pessoas-planas-organicas-meditando-ilustracao_23-2148906557.jpg?w=2000',
				description: 'Vamos meditar',
				text: 'Imagine um rio que corre',
				subcategoria_title: 'Meditação',
		        createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				title: 'Tecnologia verde',
				image: 'https://thumbs.dreamstime.com/z/ecologia-tecnologia-verde-conceito-de-projeto-org%C3%A2nico-bio-do-vetor-linha-fina-ilustra%C3%A7%C3%A3o-dos-desenhos-animados-para-112498968.jpg',
				description: 'Tech é green, tech é pop',
				text: 'Salve o mundo através de linhas de código',
				subcategoria_title: 'GreenTech',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Posts', null, {})
  }
}

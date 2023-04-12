module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Receitas', [
			{
				title: 'Lava roupas',
				image: 'https://suadecoracao.com/wp-content/uploads/2022/08/passo-a-passo-2.jpg',
				description: 'Faça em casa seu lava roupas',
				text: 'Ingredientes: 2 xicaras de bicarbonato de sodio no forno 180º por 1h, 1 barra sabao de coco, 2 xicaras bicarbonato de sodio, 30 gotas de oleo essencial de capim limao ou lavanda',
				subcategory_title: 'Casa',
				category_title: 'Limpeza',
        		createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				title: 'Cozinhar é vida',
				image: 'https://img.freepik.com/vetores-premium/conceito-de-comida-saudavel-legumes-frutas-ilustracao-vetorial-de-agua-e-leite_36358-307.jpg?w=2000',
				description: 'Comer, comer',
				text: 'Comer é muito bom',
				subcategory_title: 'Saudável',
				category_title: 'Culinária',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				title: 'Desodorante',
				image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Y7psk_WWDt89d41S2ZY2f8F8Ap0WKN1jQg&usqp=CAU',
				description: 'Faça em casa seu desodorante',
				text: 'Ingredientes: 2/3 Leite de magnésia, 1/3 Água filtrada, Gotas óleo essencial lavanda (a cada 10 ml 3 gotas) ou 2 colheres de sopa de óleo de coco, Pote de spray. Misture tudo!',
				subcategory_title: 'Corpo',
				category_title: 'Limpeza',
		    	createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Receitas', null, {})
  }
}

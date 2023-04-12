module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Lojas', [
			{
				title: 'Mar Astral',
				image: 'https://cdn.dooca.store/15601/files/logo-site-mar-astralllll.png?v=1637259333',
				description: 'cangas, camisas e bonés',
				text: 'Através de produtos confeccionados a partir de resíduos têxteis, alinhamos o cuidado com o meio ambiente e entregamos um jeito único de viver a vida: com mais consciência e mais presença.',
				subcategory_title: 'Moda sustentável',
				category_title: 'Sustentabilidade',
				url_store: 'https://www.marastral.com.br/',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				title: 'B.o.b.',
				image: 'https://cdn.shopify.com/s/files/1/0065/1277/1170/files/BANNER_SITE_09_Desodorantes_desktop_1920x.jpg?v=1673263516',
				description: 'produtos de cabelo, rosto e corpo',
				text: 'eu sou a B.O.B. e proponho um novo olhar ao cuidado, com respeito pelo meio ambiente e praticidade para uma rotina sustentável possível. você vem comigo?',
				subcategory_title: 'Corpo',
				category_title: 'Limpeza',
        		url_store: 'https://www.usebob.com.br/',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				title: 'Positiva',
				image: 'https://positivaeco.vtexassets.com/assets/vtex/assets-builder/positivaeco.store/0.0.68/logo-positivaeco-verde___744b3dec71de764d39bf54b9b1fe13b9.svg',
				description: 'limpeza de casa e autocuidado',
				text: 'Uma empresa B, brasileira, ecologicamente e socialmente responsável. Fundada em 2016 com o compromisso de trazer alternativas aos produtos de limpeza e autocuidado convencionais.',
				subcategory_title: 'Casa',
				category_title: 'Limpeza',
				url_store: 'https://www.positiva.eco.br/',
		    	createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				title: 'Biobio',
				image: 'https://cdn.shopify.com/s/files/1/0553/5996/3226/files/logo_png_biobio-completo-laranja_90x.png?v=1664815522',
				description: 'skin care, spa, casa, corpo, protetor solar e banho',
				text: 'A Nesh que agora é biobio  é uma marca de cosméticos veganos que acredita no uso de cosméticos naturais diariamente para que a sua essência seja redescoberta, no corpo, banho, casa e alma.',
				subcategory_title: 'Corpo',
				category_title: 'Limpeza',
				url_store: 'https://biobio.com.br/collections/make-biobio',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Lojas', null, {})
  }
}

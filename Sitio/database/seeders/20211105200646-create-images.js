'use strict';

let products = 
[
  {
     "id": 1,
     "name": "Silla Esmeralda",
     "description": "Silla esmeralda esta es una descripcion",
     "price": 16000,
     "discount": "hasta 6 cuotas",
     "image": "silla1111.jpg"
  },
  {
     "id": 2,
     "name": "Sofa Monaco",
     "price": 5023,
     "description": "sofa con capacidad para 3 cuerpo , tiene un ancho de 2m y una altura de 40cm , excelente para disfrutar en familia",
     "image": "silla3-removebg-preview.png",
     "discount": "hasta 12 cuotas"
  },
  {
     "id": 3,
     "name": "Silla Baltic",
     "price": 5023,
     "description": "sofa con capacidad para 3 cuerpo , tiene un ancho de 2m y una altura de 40cm , excelente para disfrutar en familia",
     "image": "silla4-removebg-preview.png",
     "discount": "hasta 12 cuotas"
  },
  {
     "id": 4,
     "name": "Silla Roma",
     "price": 5023,
     "description": "sofa con capacidad para 3 cuerpo , tiene un ancho de 2m y una altura de 40cm , excelente para disfrutar en familia",
     "image": "silla5-removebg-preview.png",
     "discount": "hasta 12 cuotas"
  },
  {
     "id": 5,
     "name": "Silla de madera",
     "description": "Silla rustica hecha en argentina",
     "price": 16500,
     "discount": "hasta 18 cuotas",
     "image": "img-product-1634088175807.png"
  }
]

let images = products.map(product => {
  let image = {
    productId : product.id,
    file : product.image,
    createdAt : new Date
  }
  return image
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Images', 
          images,
     {});
   
  },

  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkDelete('Images', null, {});
     
  }
};
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('imovel', { 
       id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, 
       },
       imo_tipo:{
         allowNull: false,
         type: Sequelize.STRING(15),
       },
       imo_cidade:{
         allowNull: false,
         type: Sequelize.STRING(20),
       },
       imo_area:{
         allowNull: false,
         type: Sequelize.INTEGER,
       },
       imo_comodos:{
        allowNull: false,
        type: Sequelize.INTEGER,
       },
       crt_codigo:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
        model: 'corretor',
        key: 'id',
        },
      },
       created_at: {
         allowNull: false,
         type: Sequelize.DATE,
       },
       updated_at: {
         allowNull: false,
         type: Sequelize.DATE,
       },
     });
   
 },

 down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('imovel');
   
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return await queryInterface.createTable('corretor', { 
       id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true, 
        },
        crt_nome:{
          allowNull: false,
          type: Sequelize.STRING(10),
        },
        crt_telefone:{
          allowNull: false,
          type: Sequelize.STRING(15),
        },
        crt_crea:{
          allowNull: false,
          type: Sequelize.STRING(10),
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
     await queryInterface.dropTable('corretor');
    
  }
};

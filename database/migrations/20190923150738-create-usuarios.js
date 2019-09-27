'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('usuarios', {
     id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER,
     },

     nome: {
       allowNull: false,
       type: Sequelize.STRING,
     },

     email: {
       allowNull: false,
       type: Sequelize.STRING,
       unique: true,
     },

     senha: {
       allowNull: false,
       type: Sequelize.STRING,
     },

     createdAt: {
       allowNull: false,
       type: Sequelize.DATE,
       default: Sequelize.NOW
     },

     updatedAt: {
       allowNull: false,
       type: Sequelize.DATE,
       default: Sequelize.NOW
     },

   })
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('usuarios')
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize)  => {
  return queryInterface.createTable('addresses', { 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: { // chave estrangeira
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'id' }, // referencia outra tabela
      onUpdate: 'CASCADE', // diz o que acontecerá caso o ID do usuário seja atualizado 
      onDelete: 'CASCADE', // '' deletado -> cascata: assim que for deletado, deleta o endereço
    },
    zipcode: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    street: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    number: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable('addresses');
  }
};


const { Op } = require('sequelize')
const User = require('../models/User');

module.exports = {
  async show(req, res) {
    // Encontrar todos os usuários que tem e-mail que termina com @gmail.com
    // Desses usuários eu quero buscar todos que moram na rua "Rua Monsenhor Silveira"
    // Desses usuários eu quero buscar as tecnologias que começam com React

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.like]: '%@gmail.com'
        }
      },
      include: [
        { association: 'addresses', 
        where: { 
          street: 'Rua Monsenhor Silveira'
         } 
        },
        { association: 'techs', 
        required: false,
        where: {
          name: {
            [Op.like]: 'React%'
          }
        }}, 
      ]
    })

    return res.json(users);
  }
};
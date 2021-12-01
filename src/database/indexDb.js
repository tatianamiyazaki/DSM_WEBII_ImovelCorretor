const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const conexao = new Sequelize(dbConfig);

const corretor = require('../api/models/corretorModels.js')
const imovel = require('../api/models/imovelModels.js')

try{
    conexao.authenticate();
    console.log('Conexão estabelecida!!!');
}catch (error){
    console.log('Conexão não estabelecida!!!', error);
}

corretor.init(conexao);
imovel.init(conexao);

module.exports = conexao;
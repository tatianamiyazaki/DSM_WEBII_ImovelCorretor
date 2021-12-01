const { Model, DataTypes } = require('sequelize');

class Corretor extends Model{
    static init(sequelize){
        super.init({
            crt_nome: DataTypes.STRING,
            crt_telefone: DataTypes.STRING,
            crt_crea: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'corretor',
        }

        );
        return this;
    }
}

module.exports = Corretor;
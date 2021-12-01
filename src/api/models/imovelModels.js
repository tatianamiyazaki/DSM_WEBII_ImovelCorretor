const { Model, DataTypes } = require('sequelize');

class Imovel extends Model{
    static init(sequelize){
        super.init({
            imo_tipo: DataTypes.STRING,
            imo_cidade: DataTypes.STRING,
            imo_area: DataTypes.INTEGER,
            imo_comodos: DataTypes.INTEGER,
            crt_codigo: DataTypes.INTEGER,
        },{
            sequelize,
            tableName: 'imovel',
        }

        );
        return this;
    }
}

module.exports = Imovel;
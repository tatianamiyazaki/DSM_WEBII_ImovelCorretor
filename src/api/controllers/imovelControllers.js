const Imovel = require('../models/imovelModels.js');

module.exports = {
    //método para consultar todos os registros
    async index(req, res){
        const imovel = await Imovel.findAll();
        return res.json(imovel);
    }, 

    //método para inserir um registro na tabela
    async store(req, res){
        const {
            imo_tipo,
            imo_cidade,
            imo_area,
            imo_comodos,
            crt_codigo
        } = req.body;

        const imovel = await Imovel.create({
            imo_tipo,
            imo_cidade,
            imo_area,
            imo_comodos,
            crt_codigo
        });

        return res.status(200).send({
            status: 1, 
            message: "Imóvel cadastrado com sucesso!!!",
            imovel
        })
    },

    //Método para atualizar registro na tabela
    async update(req, res){
        const { imo_tipo, imo_cidade, imo_area, imo_comodos, crt_codigo } = req.body;
        const { codigo } = req.params;
        
        await Imovel.update({
            imo_tipo, imo_cidade, imo_area, imo_comodos, crt_codigo
        }, { where : {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Imóvel atualizado com sucesso!!!"
        })
    },

    //Método para deletar registro na tabela
    async delete(req, res){
        const { codigo } = req.params;
        await Imovel.destroy({
            where: {
                id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Imóvel excluído com sucesso!!!"
        })
    }
}
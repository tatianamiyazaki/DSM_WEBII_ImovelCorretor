const Corretor = require('../models/corretorModels.js');

module.exports = {
    //método para consultar todos os registros
    async index(req, res){
        const corretor = await Corretor.findAll();
        return res.json(corretor);
    }, 

    //método para inserir um registro na tabela
    async store(req, res){
        const {
            crt_nome,
            crt_telefone,
            crt_crea
        } = req.body;

        const corretor = await Corretor.create({
            crt_nome,
            crt_telefone,
            crt_crea
        });

        return res.status(200).send({
            status: 1, 
            message: "Corretor cadastrado com sucesso!!!",
            corretor
        })
    },

    //Método para atualizar registro na tabela
    async update(req, res){
        const { crt_nome, crt_telefone, crt_crea } = req.body;
        const { codigo } = req.params;
        
        await Corretor.update({
            crt_nome, crt_telefone, crt_crea
        }, { where : {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Corretor atualizado com sucesso!!!"
        })
    },

    //Método para deletar registro na tabela
    async delete(req, res){
        const { codigo } = req.params;
        await Corretor.destroy({
            where: {
                id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Corretor excluído com sucesso!!!"
        })
    }
}
import ServiceCarro from '../service/carro.js'

class ControllerCarro {
    // Recebimento e a Saida das info
    Buscar(req, res) {
        try {
            const carro = ServiceCarro.Buscar()
            res.send({ mensagem: carros })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Detalhe(req, res) {
        try {
            const id = req.params.id
            
            const carro = ServiceCarro.Detalhe(id)
            
            res.send({ mensagem: carro })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Criar(req, res) {
        try {
            const { id, marca, ano } = req.body

            ServiceCarro.Criar(id, marca, ano)
            
            res.send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Alterar(req, res) {
        try {
            
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Deletar(req, res) {
        try{
            const id = req.body.id
            
            ServiceCarro.Deletar(id)

            res.send({ mensagem: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

}

export default new ControllerCarro()
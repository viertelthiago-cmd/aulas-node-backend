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

    async Detalhe(req, res) {
        try {
            const id = req.params.id
            
            const carro = await ServiceCarro.Detalhe(id)
            
            res.send({ mensagem: carro })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Criar(req, res) {
        try {
            const {  marca, ano } = req.body

          await  ServiceCarro.Criar( marca, ano)
            
            res.send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Deletar(req, res) {
        try{
            const id = req.body.id
            
        await ServiceCarro.Deletar(id)

            res.send({ mensagem: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

}

export default new ControllerCarro()
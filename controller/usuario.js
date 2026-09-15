import usuario from '../model/usuario.js'
import ServiceUsuario from '../service/usuario.js'

class ControllerUsuario {
    // Recebimento e a Saida das info
    Buscar(req, res) {
        try {
            const Usuario = ServiceUsuario.Buscar()
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
            
            const Usuario = await ServiceUsuario.Detalhe(id)
            
            res.send({ mensagem: usuario })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Criar(req, res) {
        try {
            const {  email, senha } = req.body

          await  ServiceUsuario.Criar( email, senha)
            
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
            
        await ServiceUsuario.Deletar(id)

            res.send({ mensagem: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Login(email, senha) {
        if(!email || !senha) {
            throw new Error("Email ou senha invalido")
        }
        const usuario = await RepositoryUsuario.FindByEmail(email)

        if(!usuario) {
            throw new Error("Email")
        }
    }

}

export default new ControllerUsuario()
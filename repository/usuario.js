import usuario from '../model/usuario.js'

class RepositoryUsuario {

    async Find() {
        const usuario = await usuario.findAll()

        return usuario
    }
    async FindById(id) {
        const usuarioDetalhes = await usuario.FindByPk(id)

        return usuarioDetalhes
    }
    async Create(marca, ano) {
        const usuarioCreate = await usuario.create({marca, ano})

        return usuarioCreate
    }
    async Update() {
        const uapdated = await usuario.Update()

        return uapdated
    }
    async Delete(id){
        const usuarioDeletar = await usuario.findByPk(id)

        if(!usuarioDeletar) {
            throw new Error ("Carro não encontrado")
        }
        await usuarioDeletar

        return usuarioDeletar
    }
    async FindByEmail(email) {
        return usuario.findOne({where})
    }
}

export default new RepositoryUsuario()
import Usuario from "../model/usuario.js"
import bcrypt from 'bcrypt'

class ServiceUsuario {

    // Core- Regra de Negocio
    Buscar() {
         return RepositoryUsuario.Find()
    }
        

    Detalhe(id) {
        // if(!id) {
        //     throw new Error("Favor informar o ID")
        // }
        // const usuario = usuario.find(it => it.id === id)

        // if(!usuario) {
        //     throw new Error(`ID ${id}do carro não encontrado`)
        // }

        // return usuario
    }
    //função(parametros)=infinitos.
    async Criar(id, marca, ano) {
         if (!id || !marca || !ano) {
                throw new Error({ mensagem: "Favor informar todos os dados" })
                
            }
             const usuario = await RepositoryUsuario.Create(marca, ano)

             return usuario
    }

    Alterar() {}

    Deletar(id) {
         if (!id){
         throw new Error("Favor informa o ID")
         }
        const usuario =  RepositoryUsuario.Delete(id)

       return usuario
    }

Deletar(email, senha) {
         if (!id){
         throw new Error("Favor informa o ID")
         }
        const usuario =  RepositoryUsuario.Delete(id)

       return usuario
    }


}

export default new ServiceUsuario()
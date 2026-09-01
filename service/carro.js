

class ServiceCarro {

    // Core- Regra de Negocio
    Buscar() {
         return RepositoryCarro.Find()
    }
        

    Detalhe(id) {
        // if(!id) {
        //     throw new Error("Favor informar o ID")
        // }
        // const carro = carros.find(it => it.id === id)

        // if(!carro) {
        //     throw new Error(`ID ${id}do carro não encontrado`)
        // }

        // return carro
    }
    //função(parametros)=infinitos.
    Criar(id, marca, ano) {
        // if (!id || !marca || !ano) {
        //         throw new Error({ mensagem: "Favor informar todos os dados" })
                
        //     }
        //     RepositoryCarro.push({ id, marca, ano })

        //     return {id, marca, ano}
    }

    Alterar() {}

    Deletar(id) {
        // if (!id){
        //     throw new Error("Favor informa o ID")
        // }
        //  RepositoryCarro.splice(it => it.id === id, 1)

        //  return id
    }

}

export default new ServiceCarro()
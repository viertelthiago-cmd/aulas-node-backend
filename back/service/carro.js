

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
    async Criar(id, marca, ano) {
         if (!id || !marca || !ano) {
                throw new Error({ mensagem: "Favor informar todos os dados" })
                
            }
             const carro = await RepositoryCarro.Create(marca, ano)

             return carro
    }

    Alterar() {}

    Deletar(id) {
         if (!id){
         throw new Error("Favor informa o ID")
         }
        const carro =  RepositoryCarro.Delete(id)

       return carro
    }

}

export default new ServiceCarro()
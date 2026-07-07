import express from 'express'
import bancoDeDados from './repository/index.js'    

const app = express()
app.get("/api/pessoa/:id", (req, res) => {
    const id = req.params.id
    const pessoa =bancoDeDados.find(it => it.id == id)
    if (!pessoa) {
        res.send({message: "Pessoa não encontrada"})
    }

    res.send({ pessoa })
})

app.get("/api/pessoa", (req, res) => {
    const {id, name} = req.query

    if(!id || !name) {
        res.send({ message: "Favor informar id e name"})
        return
    }
    bancoDeDados.push({id, name })
    console.log(bancoDeDados)
    res.send({message: "Pessoa criada com sucesso"})
})

// Inicia o servidor Express na porta 3000 e define uma função de retorno de
app.listen(3000, () => {
    //Exibe uma mensagem no
    console.log("Servidor escutando na porta 3000")
})

//buscar - get - /api/pessoa/:id
//criar - get - /api/pessoa
//alterar - get - /api/alterar/:id
//deletar - get - /spi/deletar/:id
//buscarT - get - /api/buscar <-------------->
import express from 'express'
import bancoDeDados from './repository/index.js'    

const app = express()
app.get("/api/v1/somar", (req, res) => {
    const {num1, num2} = req.query
    const resultado = Number(num1) + Number(num2)

    

    res.send({  })
})

app.post("/api/v1/somar", (req, res) => {
    const {num1, num2, num3} = req.body
    const resultado = Number(num1) + Number(num2) + Number(num3)

})

app.post("/api/v1/somar", (req, res) => {
    const {num1, num2, num3, num4, num5} = req.body
    const resultado = Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)


})

app.post("/api/v1/somar", (req, res) => {
    const {num1, num2} = req.body
    const resultado = Number(num1) + Number(num2)


})

    res.send({ pessoa })



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
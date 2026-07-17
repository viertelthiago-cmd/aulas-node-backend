import express from 'express'
import router from './router/atividade1'
import router from './router/atividade2'
const app = express()

app.use(express.json())

app.get("/api/v1/somar", (req, res) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) + Number(num2)
    res.send({ resultado })
})

app.use('/api/v1/atvd1', atvd1)

app.post("/api/v1/atvd2", (req, res) => {
    const { num1, num2, num3, num4, num5 } = req.body
    const resultado = num1 + num2 + num3 + num4 + num5
    res.send({ resultado })

})

app.post("/api/v1/atvd3", (req, res) => {
    const { num1, num2 } = req.body
    const resultado = num1 + num2
    res.send({ resultado })

})

app.post("/api/v1/atvd4", (req, res) => {
    const { num1, num2 } = req.body
    const resultado = num1 + num2
    res.send({ resultado })

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
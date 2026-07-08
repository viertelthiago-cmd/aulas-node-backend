import express from 'express'
    
const app = express()

app.get("/api/v1/somar", (req, res) => {
    const {num1, num2} = req.query
    const resultado = Number(num1) + Number(num2)

    res.status(200).send({message: resultado })
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
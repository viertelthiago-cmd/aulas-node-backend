import express from 'express'

const app = express()
//configura uma rota para metodo http get na raiz ("/") do aplicativo
app.get("/api/v1/somar", (req, res) => {
    const num1 = 10 
    const num2 = 20
    const resultado = num1 + num2
    //retorna uma resposta json contendo uma mensagem "Hello World"
    res.send({ resultado })
    console.log(num1,num2)
})
// Inicia o servidor Express na porta 3000 e define uma função de retorno de
app.listen(3000, () => {
    //Exibe uma mensagem no
    console.log("Servidor ouvinda na porta 3000")
})
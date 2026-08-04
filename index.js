import express from 'express'
import cachorro from './router/cachorro.js'
const app = express()

app.use(express.json())

app.use('/api/v1/cachorro', cachorro)


// Inicia o servidor Express na porta 3000 e define uma função de retorno de
app.listen(3000, () => {
    //Exibe uma mensagem no
    console.log("Servidor escutando na porta 3000")
})

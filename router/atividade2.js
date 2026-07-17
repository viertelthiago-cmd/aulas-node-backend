import express from "express"
const router = express.Router()

app.get("/api/v1/atvd2", (req, res) => {
    const { horas, dinheiro } = req.query
    const resultado = Number(horas) * Number(dinheiro)
    res.send({ message: resultado })

})      

export default router
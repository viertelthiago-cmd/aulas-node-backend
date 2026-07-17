import express from "express"
const router = express.Router()

app.post("/api/v1/atvd1", (req, res) => {
    const { num1, num2, num3 } = req.body
    const resultado = num1 + num2 + num3
    res.send({ resultado })
})

export default router
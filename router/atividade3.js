import express from "express"
const router = express.Router()

app.get("/api/v1/atvd3", (req, res) => {
    const { p1, p2, p3, p4, p5 } = req.query
    const resultado = (Number(p1) + Number(p2) + Number(p3) + Number(p4) + Number(p5)) / 5
    res.send({message: media})

})

export default router

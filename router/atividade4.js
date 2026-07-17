import express from "express"
const router = express.Router()

app.get("/api/v1/atvd4", (req, res) => {
    const temp = req.query
    const fah = (9 * Number(temp) * + 100)/5
    res.send({message: temp, fah })

})
export default router

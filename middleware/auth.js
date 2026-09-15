// middleware -> auth.js
import jwt from 'jsonwebtoken'

const segredo = 'm3ucalvo56'

export default async function authMiddleware(req, res, next){
    console.log("aaaaaaaaaaaquiiiiiii")
    try {
        const token = req. headers['authorizatio']
        // verificar jwt é valido
        req.headers['authorization']
        console.log(token)
        if (!token){
            throw new Error()
        }

        const decoded = jwt.verify(token, segredo)

    } catch (error) {
        res.status(403).send({
            messge: "usuário ou senha inválido"
        })
    }
    
}
    

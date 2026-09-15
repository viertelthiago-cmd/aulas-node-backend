import express from "express"
import ControllerUsuario from "../controller/usuario.js"
import authMiddleware from "../middleware/auth.js"
const router = express.Router()
router.post("/login")
// Buscar todos
router.get("/buscar",authMiddleware, ControllerUsuario.Buscar )
// Buscar Um
router.get("/detalhe/:id", ControllerUsuario.Detalhe )
// Criar
router.post("/criar", ControllerUsuario.Criar)
// Alterar
router.post("/alterar", ControllerUsuario.Alterar )
// Deletar
router.post("/deletar", ControllerUsuario.Deletar)

export default router
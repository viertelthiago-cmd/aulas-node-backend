import api from './api'

// buscar

// buscarUm

//criar

//alterar

//deletar


export const loginUser = async (email, senha) => {
    const body = { email, senha }
   const response = await api.post('/v1/usuario/login', body, {
    headers: { 'Content-type': 'application/json' }
   })

   return response.data
}
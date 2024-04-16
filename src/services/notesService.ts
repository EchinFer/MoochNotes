import { http } from "../lib/apiCliente"

export const getAll = async() => {
    try {
        http.get("/note/")
    } catch (error) {
        
    }
}
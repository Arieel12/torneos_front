import Requests from "@/utils/Requests";

export const obtenerTorneos = async () => {
    return Requests.get("/torneos")
}

export const crearTorneo = async (nombre) => {
    return Requests.post("/torneos", {nombre: nombre})
}
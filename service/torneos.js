import Requests from "@/utils/Requests";

export const obtenerTorneos = async () => {
    return Requests.get("/torneos")
}

export const crearTorneo = async (nombre) => {
    return Requests.post("/torneos", {nombre: nombre})
}

export const actualizarTorneo = async (nombre, id) =>{
    return Requests.put("/torneos", {nombre: nombre, id: id})
}

export const obtenerEquipos = async () =>{
    return Requests.get("/equipos")
}

export const crearEquipo = async (nombre, id_torneo, numero_jugadores) => {
    return Requests.post("/equipos", {nombre: nombre, id_torneo:id_torneo, numero_jugadores:numero_jugadores})
}

export const mostrarEquiposTorneo = async (id_torneo) =>{
    return Requests.get("/equipostorneo", { params: {id_torneo: id_torneo}})
}

export const crearPartido = async (id_equipo1, id_equipo2, goles_equipo1, goles_equipo2) => {
    return Requests.post("/partidos", {id_equipo1: id_equipo1, id_equipo2:id_equipo2, goles_equipo1:goles_equipo1, goles_equipo2:goles_equipo2})
}

export const mostrarPartidos = async () =>{
    return Requests.get("/partidos")
}

export const cargarResultados = async (goles_equipo1, goles_equipo2, id) =>{
    return Requests.put("/partidos", {goles_equipo1: goles_equipo1, goles_equipo2:goles_equipo2, id:id})
}

export const crearFixture = async (id_torneo) =>{
    return Requests.post("/fixture", {id_torneo: id_torneo})
}
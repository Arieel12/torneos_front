"use client"; // hay que agregarlo en los componentes

import React, { useEffect, useState } from "react";

import '../app/globals.css';

import { crearPartido } from "@/service/torneos";


const crearPartidos = () => {
    const crear = (e) =>{
        e.preventDefault()
        crearPartido(e.target.id_equipo1.value, e.target.id_equipo2.value, e.target.goles_equipo1.value,  e.target.goles_equipo2.value)
        console.log(e.target.id_equipo1.value, e.target.id_equipo2.value, e.target.goles_equipo1.value,  e.target.goles_equipo2.value)
    }

  
    return (
      <div className="contenedor-torneo">
        <form onSubmit={crear}>
            <label for="torneo">ID equipo 1:</label>
            <input type="text" id="torneo" name="id_equipo1" />
            <label for="torneo">ID equipo 2:</label>
            <input type="text" id="torneo" name="id_equipo2" />
            <label for="torneo">Goles equipo1</label>
            <input type="text" id="torneo" name="goles_equipo1" />
            <label for="torneo">Goles equipo2</label>
            <input type="text" id="torneo" name="goles_equipo2" />
            <button className="boton-crear" type="submit">Crear Partido</button>
        </form>
        
      </div>
    );
  };
  
  export default crearPartidos;
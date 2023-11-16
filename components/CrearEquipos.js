"use client"; // hay que agregarlo en los componentes

import React, { useEffect, useState } from "react";

import '../app/globals.css';

import { crearEquipo } from "@/service/torneos";


const CrearEquipos = () => {
    const crear = (e) =>{
        e.preventDefault()
        crearEquipo(e.target.nombre_equipo.value, e.target.id_torneo.value, e.target.cantidad_jugadores.value)
        console.log(e.target.nombre_equipo.value, e.target.id_torneo.value, e.target.cantidad_jugadores.value)
    }

  
    return (
      <div className="contenedor-torneo">
        <form onSubmit={crear}>
            <label for="torneo">Nombre del equipo:</label>
            <input type="text" id="torneo" name="nombre_equipo" />
            <label for="torneo">ID_torneo:</label>
            <input type="text" id="torneo" name="id_torneo" />
            <label for="torneo">Cantidad_jugadores:</label>
            <input type="text" id="torneo" name="cantidad_jugadores" />
            <button className="boton-crear" type="submit">Crear Equipo</button>
        </form>
        
      </div>
    );
  };
  
  export default CrearEquipos;

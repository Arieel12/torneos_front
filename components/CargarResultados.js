"use client"; // hay que agregarlo en los componentes

import React, { useEffect, useState } from "react";

import '../app/globals.css';

import { cargarResultados } from "@/service/torneos";


const CargarResultados = () => {
    const cargar = (e) =>{
        e.preventDefault()
        cargarResultados(e.target.goles_equipo1.value, e.target.goles_equipo2.value, e.target.id_partido.value)
        console.log(e.target.goles_equipo1.value, e.target.goles_equipo2.value, e.target.id_partido.value)
    }

  
    return (
      <div className="contenedor-actualizar">
        <form onSubmit={cargar}>
            <label for="torneo">Ingrese el ID del partido:</label>
            <input type="text" id="torneo" name="id_partido" />
            <label for="torneo">Ingrese los goles del equipo 1:</label>
            <input type="text" id="torneo" name="goles_equipo1" />
            <label for="torneo">Ingrese los goles del equipo 2:</label>
            <input type="text" id="torneo" name="goles_equipo2" />
            <button className="boton-crear" type="submit">Cargar Resultados</button>
        </form>
      </div>
    );
  };
  
  export default CargarResultados;

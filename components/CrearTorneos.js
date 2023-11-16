"use client"; // hay que agregarlo en los componentes

import React, { useEffect, useState } from "react";

import '../app/globals.css';

import { crearTorneo } from "@/service/torneos";


const Crear_torneos = () => {
    const crear = (e) =>{
        e.preventDefault()
        crearTorneo(e.target.nuevo_torneo.value)
        console.log(e.target.nuevo_torneo.value)
    }

  
    return (
      <div className="contenedor-torneo">
        <form onSubmit={crear}>
            <label for="torneo">Nuevo Torneo:</label>
            <input type="text" id="torneo" name="nuevo_torneo" />
            <button className="boton-crear" type="submit">Crear Torneo</button>
        </form>
      </div>
    );
  };
  
  export default Crear_torneos;

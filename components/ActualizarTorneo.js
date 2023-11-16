"use client"; // hay que agregarlo en los componentes

import React, { useEffect, useState } from "react";

import '../app/globals.css';

import { actualizarTorneo } from "@/service/torneos";


const ActualizarTorneo = () => {
    const actualizar = (e) =>{
        e.preventDefault()
        actualizarTorneo(e.target.torneo_actualizado.value, e.target.id_torneo.value)
        console.log(e.target.torneo_actualizado.value, e.target.id_torneo.value)
    }

  
    return (
      <div className="contenedor-actualizar">
        <form onSubmit={actualizar}>
            <label for="torneo">Ingrese el ID del torneo a actualizar:</label>
            <input type="text" id="torneo" name="id_torneo" />
            <label for="torneo">Ingrese el Nombre del torneo a actualizar:</label>
            <input type="text" id="torneo" name="torneo_actualizado" />
            <button className="boton-crear" type="submit">Actualizar Torneo</button>
        </form>
      </div>
    );
  };
  
  export default ActualizarTorneo;

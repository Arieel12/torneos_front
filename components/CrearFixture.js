"use client"; // hay que agregarlo en los componentes

import React, { useEffect, useState } from "react";

import '../app/globals.css';

import { crearFixture } from "@/service/torneos";


const CrearFixture = () => {
    const crear = (e) =>{
        e.preventDefault()
        crearFixture(e.target.id_torneo.value)
        console.log(e.target.id_torneo.value)
    }
  
    return (
      <div className="contenedor-torneo">
        <form onSubmit={crear}>
            <label for="torneo">Ingrese el ID del torneo al que quiere crear un Fixture:</label>
            <input type="text" id="torneo" name="id_torneo" />
            <button className="boton-crear" type="submit">Crear Fixture</button>
        </form>
      </div>
    );
  };
  
  export default CrearFixture;
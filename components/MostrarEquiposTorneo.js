"use client"; // hay que agregarlo en los componentes

import React, { useEffect, useState } from "react";

import '../app/globals.css';

import { mostrarEquiposTorneo } from "@/service/torneos";

const MostrarEquiposTorneo = () => {
  const [Mostrar_equipo_torneo, setMostrar_equipo_torneo] = useState([]);
  const [error, setError] = useState(null);

  const mostrar = (e) => {
    e.preventDefault()
    mostrarEquiposTorneo(e.target.id_torneo.value)
      .then((response) => {
        console.log(response);
        setMostrar_equipo_torneo(response);
      })
      .catch((error) => {
        setError(error);
      });
  };


  return (
    <div>
      {error && <div>{error.message}</div>}
      <div className="contenedor-actualizar">
        <form onSubmit={mostrar}>
            <label htmlFor="torneo">Ingrese el ID del torneo:</label>
            <input type="text" id="torneo" name="id_torneo" />
            <button className="boton-crear" type="submit">Buscar</button>
        </form>
      </div>
      <h1 className="TituloTorneos">Equipos</h1>
      <table className="torneos-table">
        <thead>
          <tr className="contenedor-torneo">
            <th className="nombre-columna">ID_equipos:</th>
            <th className="nombre-columna">Nombre:</th>
          </tr>
        </thead>
        <tbody>
          {Mostrar_equipo_torneo &&
            Mostrar_equipo_torneo.map((equipos) => (
              <tr key={equipos.id}>
                <td className="datos-torneo">{equipos.id}</td>
                <td className="datos-torneo">{equipos.nombre}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostrarEquiposTorneo;

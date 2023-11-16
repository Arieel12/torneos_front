"use client"; // hay que agregarlo en los componentes

import React, { useEffect, useState } from "react";

import '../app/globals.css';

import { mostrarPartidos } from "@/service/torneos";

const MostrarPartidos = () => {
  const [Mostrar_partidos, setMostrar_partidos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    mostrarPartidos()
      .then((response) => {
        console.log(response);
        setMostrar_partidos(response);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      {error && <div>{error.message}</div>}
      <h1 className="TituloTorneos">Partidos</h1>
      <table className="torneos-table">
        <thead>
          <tr className="contenedor-torneo">
          <th className="nombre-columna">ID Partido</th>
            <th className="nombre-columna">ID Torneo</th>
            <th className="nombre-columna">ID equipo1</th>
            <th className="nombre-columna">ID equipo2</th>
            <th className="nombre-columna">Goles Equipo1</th>
            <th className="nombre-columna">Goles Equipo2</th>
            <th className="nombre-columna">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {Mostrar_partidos &&
            Mostrar_partidos.map((partido) => (
              <tr key={partido.id}>
                <td className="datos-torneo">{partido.id}</td>
                <td className="datos-torneo">{partido.id_torneo}</td>
                <td className="datos-torneo">{partido.id_equipo1}</td>
                <td className="datos-torneo">{partido.id_equipo2}</td>
                <td className="datos-torneo">{partido.goles_equipo1}</td>
                <td className="datos-torneo">{partido.goles_equipo2}</td>
                <td className="datos-torneo">{partido.fecha}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostrarPartidos;

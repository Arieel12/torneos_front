"use client"; // hay que agregarlo en los componentes

import React, { useEffect, useState } from "react";

import '../app/globals.css';

import { obtenerEquipos } from "@/service/torneos";

const MostrarEquipos = () => {
  const [Mostrar_equipos, setMostrar_equipos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerEquipos()
      .then((response) => {
        console.log(response);
        setMostrar_equipos(response);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      {error && <div>{error.message}</div>}
      <h1 className="TituloTorneos">Equipos</h1>
      <table className="torneos-table">
        <thead>
          <tr className="contenedor-torneo">
            <th className="nombre-columna">ID</th>
            <th className="nombre-columna">Nombre</th>
            <th className="nombre-columna">ID_Torneo</th>
            <th className="nombre-columna">Cantidad_jugadores</th>
          </tr>
        </thead>
        <tbody>
          {Mostrar_equipos &&
            Mostrar_equipos.map((equipo) => (
              <tr key={equipo.id}>
                <td className="datos-torneo">{equipo.id}</td>
                <td className="datos-torneo">{equipo.nombre}</td>
                <td className="datos-torneo">{equipo.id_torneo}</td>
                <td className="datos-torneo">{equipo.numero_jugadores}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostrarEquipos;

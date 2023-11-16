"use client"; // hay que agregarlo en los componentes

import React, { useEffect, useState } from "react";

import '../app/globals.css';

import { obtenerTorneos } from "@/service/torneos";

const Mostrar_torneos = () => {
  const [Mostrar_torneos, setMostrar_Torneos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerTorneos()
      .then((response) => {
        console.log(response);
        setMostrar_Torneos(response);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      {error && <div>{error.message}</div>}
      <h1 className="TituloTorneos">Torneos</h1>
      <table className="torneos-table">
        <thead>
          <tr className="contenedor-torneo">
            <th className="nombre-columna">ID</th>
            <th className="nombre-columna">Nombre</th>
            <th className="nombre-columna">Fecha_creacion</th>
          </tr>
        </thead>
        <tbody>
          {Mostrar_torneos &&
            Mostrar_torneos.map((torneo) => (
              <tr key={torneo.id}>
                <td className="datos-torneo">{torneo.id}</td>
                <td className="datos-torneo">{torneo.nombre}</td>
                <td className="datos-torneo">{torneo.fecha_creacion}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mostrar_torneos;

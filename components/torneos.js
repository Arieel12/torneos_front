"use client"; // hay que agregarlo en los componentes

import React, { useEffect, useState } from "react";

import { obtenerTorneos } from "@/service/torneos";

const Torneos = () => {
  const [torneos, setTorneos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerTorneos()
      .then((response) => {
        console.log(response);
        setTorneos(response);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      {error && <div>{error.message}</div>}
      {torneos &&
        torneos.map((torneo) => {
          return <div>{torneo.nombre}</div>;
        })}
    </div>
  );
};

export default Torneos;

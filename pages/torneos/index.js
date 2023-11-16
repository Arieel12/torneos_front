import ActualizarTorneo from "@/components/ActualizarTorneo";
import CrearTorneos from "@/components/CrearTorneos";
import MostrarEquipos from "@/components/MostrarEquipos";
import MostrarTorneos from "@/components/MostrarTorneos";
import CrearEquipos from "@/components/CrearEquipos";
import MostrarEquiposTorneo from "@/components/MostrarEquiposTorneo";
import CrearPartidos from "@/components/CrearPartido";
import MostrarPartidos from "@/components/MostrarPartidos";
import CargarResultados from "@/components/CargarResultados"

export default function TorneosPage() {
  return <div>
          <MostrarTorneos />;
          <CrearTorneos />;
          <ActualizarTorneo />;
          <MostrarEquipos />;
          <CrearEquipos />;
          <MostrarEquiposTorneo />;
          <CrearPartidos />;
          <MostrarPartidos />;
          <CargarResultados />;
          <CrearFixture />;
        </div>
}

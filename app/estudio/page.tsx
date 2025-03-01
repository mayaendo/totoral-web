import Navegacion from "../../components/Navegacion";
import Espacio from "../../components/Espacio";
import Indumentaria from "../../components/Indumentaria";
import Team from "../../components/Team";

export default function EstudioPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navegacion />
      <div className="pt-16">
        <Espacio />
        <Indumentaria />
        <Team />
      </div>
    </main>
  );
} 
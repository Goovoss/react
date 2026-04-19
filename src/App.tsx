import { DataTable } from "./components/DataTable";
import { diferenciaDias } from "./utils/fecha-utils";
import type { Columna } from "./types/index";

interface Estudiante {
  id: string;
  nombreCompleto: string;
  email: string;
  curso: number;
}

const estudiantes: Estudiante[] = [
  { id: "EST-001", nombreCompleto: "Ana García", email: "ana@universidad.es", curso: 2 },
  { id: "EST-002", nombreCompleto: "Carlos López", email: "carlos@universidad.es", curso: 3 },
  { id: "EST-003", nombreCompleto: "María Pérez", email: "maria@universidad.es", curso: 1 },
];

const columnas: Columna<Estudiante>[] = [
  { cabecera: "Nombre", clave: "nombreCompleto" },
  { cabecera: "Email", clave: "email" },
  { cabecera: "Curso", clave: "curso" },
];

const fechaInicio = new Date("2024-09-01");
const fechaFin = new Date("2025-06-30");

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Sistema Universitario</h1>

      <h2>Tabla de Estudiantes</h2>
      <DataTable datos={estudiantes} columnas={columnas} />

      <h2>Utilidad de fechas</h2>
      <p>
        Días entre el inicio y el fin del curso:{" "}
        <strong>{diferenciaDias(fechaInicio, fechaFin)}</strong>
      </p>
    </div>
  );
}

export default App;
import { useState } from "react";
import type { Columna } from "../types/index";

interface DataTableProps<T extends { id: string }> {
  datos: T[];
  columnas: Columna<T>[];
}

export function DataTable<T extends { id: string }>({ datos, columnas }: DataTableProps<T>) {
  const [filaEditando, setFilaEditando] = useState<Partial<T> | null>(null);
  const [idEditando, setIdEditando] = useState<string | null>(null);

  function iniciarEdicion(fila: T) {
    setIdEditando(fila.id);
    setFilaEditando({ ...fila });
  }

  function cancelarEdicion() {
    setIdEditando(null);
    setFilaEditando(null);
  }

  return (
    <div>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            {columnas.map((col) => (
              <th key={String(col.clave)}>{col.cabecera}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((fila) => (
            <tr key={fila.id}>
              {columnas.map((col) => (
                <td key={String(col.clave)}>{String(fila[col.clave])}</td>
              ))}
              <td>
                {idEditando === fila.id ? (
                  <>
                    <span>Editando... </span>
                    <button onClick={cancelarEdicion}>Cancelar</button>
                  </>
                ) : (
                  <button onClick={() => iniciarEdicion(fila)}>Editar</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filaEditando && (
        <div>
          <h3>Estado de edición (Partial&lt;T&gt;):</h3>
          <pre>{JSON.stringify(filaEditando, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
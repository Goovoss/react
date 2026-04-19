# Arquitectura final — Fase 4 TypeScript

## Genéricos
El componente `DataTable<T>` acepta cualquier tipo de dato sin perder seguridad de tipos.
Si pasas una clave incorrecta en `columnas`, el compilador lo detecta antes de ejecutar.
En JavaScript puro esto sería un error silencioso en runtime.

## Uniones Discriminadas
`EstadoMatricula` modela tres estados reales del sistema (ACTIVA, SUSPENDIDA, FINALIZADA).
Cada estado tiene exactamente las propiedades que necesita, sin opcionales ambiguos.
TypeScript estrecha el tipo automáticamente dentro de cada `case` del switch.

## El tipo never
El bloque `default` con `never` en `generarReporte` garantiza que si en el futuro
se añade un nuevo estado a `EstadoMatricula`, el compilador obliga a manejarlo.
En JavaScript esto sería un bug silencioso en producción.

## Tipos de utilidad
`Partial<T>` en el estado de edición de `DataTable` permite que el usuario
edite una fila sin necesidad de tener todos los campos rellenados.
En JavaScript habría que gestionar esto manualmente con comprobaciones en runtime.

## Conclusión
TypeScript no añade overhead en runtime — los tipos desaparecen al compilar.
Todo el beneficio es en tiempo de desarrollo: errores detectados antes de llegar a producción.
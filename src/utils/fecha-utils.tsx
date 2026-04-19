import { differenceInDays } from "date-fns";

export function diferenciaDias(fechaInicio: Date, fechaFin: Date): number {
  return differenceInDays(fechaFin, fechaInicio);
}
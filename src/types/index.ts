export interface Columna<T> {
  cabecera: string;
  clave: keyof T;
}
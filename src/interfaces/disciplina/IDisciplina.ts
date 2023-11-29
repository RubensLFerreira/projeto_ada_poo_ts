export interface IDisciplina {
  _id: number;
  _nome: string;
  _nota: number
  _cargaHoraria: number;
  atualizarDados(nome: string, cargaHoraria: number, nota: number): void;
}
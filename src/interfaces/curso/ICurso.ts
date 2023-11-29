export interface ICurso {
  _id: number;
  _nome: string;
  _disciplinas: Array<number>;
  atualizarDados(nome: string, disciplinas: Array<number>): void;
}
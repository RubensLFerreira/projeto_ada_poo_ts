export interface IAluno  {
  _id: number;
  _nome: string;
  _idade: number;
  _matricula: number;
  _curso: number;
  atualizarDados(nome: string, idade: number, curso: number): void;
}
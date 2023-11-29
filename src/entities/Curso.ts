import Util from "../utils";

export default class Curso {
  _id: number;
  _nome: string;
  _disciplinas: Array<number>;

  constructor(nome: string, disciplinas: Array<number>) {
    this._id = Util.id();
    this._nome = nome;
    this._disciplinas = disciplinas;
  }

  atualizarDados(nome: string, disciplinas: Array<number>): void {
    this._nome = nome;
    this._disciplinas = disciplinas;
  }
}
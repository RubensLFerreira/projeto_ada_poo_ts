import Util from '../utils/index';

export default class Disciplina {
  _id: number;
  _nome: string;
  _nota: number
  _cargaHoraria: number;

  constructor(nome: string, cargaHoraria: number, nota: number) {
    this._id = Util.id();
    this._nome = nome;
    this._nota = nota;
    this._cargaHoraria = cargaHoraria;
  }

  public atualizarDados(nome: string, cargaHoraria: number, nota: number): void {
    this._nome = nome;
    this._nota = nota;
    this._cargaHoraria = cargaHoraria;
  }
}
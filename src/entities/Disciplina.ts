import Util from '../utils/index';

export default class Disciplina {
  _id: number;
  _nome: string;
  _descricao: string
  _cargaHoraria: number;

  constructor(nome: string, descricao: string, cargaHoraria: number) {
    this._id = Util.id();
    this._nome = nome;
    this._descricao = descricao;
    this._cargaHoraria = cargaHoraria;
  }

  public atualizarDados(nome: string, descricao: string, cargaHoraria: number): void {
    this._nome = nome;
    this._descricao = descricao;
    this._cargaHoraria = cargaHoraria;
  }
}
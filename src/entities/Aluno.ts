import Util from '../utils';

export default class Aluno {
  _id: number;
  _nome: string;
  _idade: number;
  _matricula: number;
  _curso: number;

  constructor(nome: string, idade: number, curso: number) {
    this._id = Util.id();
    this._nome = nome;
    this._idade = idade;
    this._matricula = Util.matricula();
    this._curso = curso;
  }

  atualizarDados(nome: string, idade: number, curso: number): void {
    this._nome = nome;
    this._idade = idade;
    this._curso = curso;
  }
}
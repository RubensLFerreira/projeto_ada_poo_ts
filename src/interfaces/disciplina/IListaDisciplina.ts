import { IDisciplina } from './IDisciplina';

export interface IListaDisciplina {
  disciplinas: Array<IDisciplina> | undefined;
  cadastrar(disciplina: IDisciplina): IDisciplina | undefined;
  listar(): void;
  consultar(id: number): IDisciplina | undefined;
  remover(id: number): IDisciplina | void;
}
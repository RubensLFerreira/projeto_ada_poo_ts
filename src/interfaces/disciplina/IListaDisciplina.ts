import { IDisciplina } from './IDisciplina';

export interface IListaDisciplina {
  disciplinas: Array<IDisciplina> | undefined;
  cadastrar(disciplina: IDisciplina): IDisciplina;
  listar(): void;
  consultar(id: number): IDisciplina | undefined;
  remover(id: number): void;
}

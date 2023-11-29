import { IAluno } from "./IAluno";

export interface IListaAluno {
  alunos: Array<IAluno> | undefined;
  cadastrar(aluno: IAluno): IAluno;
  listar(): void;
  consultar(id: number): IAluno | undefined;
  remover(id: number): void;
}
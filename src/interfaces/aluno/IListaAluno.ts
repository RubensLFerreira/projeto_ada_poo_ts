import { IAluno } from './IAluno';

export interface IListaAluno {
  alunos: Array<IAluno> | undefined;
  cadastrar(aluno: IAluno): IAluno | undefined;
  listar(): void;
  listarId(): void;
  consultar(id: number): IAluno | undefined;
  remover(id: number): void | undefined;
}
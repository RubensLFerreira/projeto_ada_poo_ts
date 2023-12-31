import { ICurso } from './ICurso';

export interface IListaCurso {
  cursos: Array<ICurso> | undefined;
  cadastrar(curso: ICurso): ICurso | undefined;
  listar(): void;
  consultar(id: number): ICurso | undefined;
  remover(id: number): void | undefined;
}
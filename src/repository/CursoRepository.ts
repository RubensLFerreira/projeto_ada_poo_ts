import { ICurso } from "../interfaces/curso/ICurso";
import { IListaCurso } from "../interfaces/curso/IListaCurso";

export default class CursoRepository implements IListaCurso {
  cursos: Array<ICurso> | undefined;

  constructor() {
    this.cursos = [];
  }

  cadastrar(curso: ICurso): ICurso {
    this.cursos?.push(curso);
    return curso;
  }

  listar(): void {
    console.log('\n--------------------------- Lista de Cursos ---------------------------');

    this.cursos?.forEach((curso) => {
      console.log(`| ID: ${curso._id} | Nome: ${curso._nome} |`);
    });

    console.log('-----------------------------------------------------------------------\n');
  }

  consultar(id: number): ICurso | undefined {
    const curso = this.cursos?.find((curso) => curso._id === id);

    if (!curso) {
      console.log('Curso não encontrado!');
      return;
    }

    console.log(`\n------------- Curso id: ${id} -------------`);
    console.log(`| Nome: ${curso._nome} |`);
    console.log(`--------------------------------------------`);
    return curso;
  }

  remover(id: number): void {
    const curso = this.cursos?.find((curso) => curso._id === id);

    if (!curso) {
      console.log('\nCurso não encontrado!');
      return;
    }

    const index = this.cursos?.indexOf(curso);
    this.cursos?.splice(index!, 1);
    console.log('\nCurso removido com sucesso!');
  }
}

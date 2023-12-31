import { ICurso } from '../interfaces/curso/ICurso';
import { IListaCurso } from '../interfaces/curso/IListaCurso';

import DisciplinaMenu from '../menu/DisciplinaMenu';

export default class CursoRepository implements IListaCurso {
  cursos: Array<ICurso> | undefined;

  constructor() {
    this.cursos = [];
  }

  cadastrar(curso: ICurso): ICurso | undefined {
    try {
      this.cursos?.push(curso);
      return curso;
    } catch (error) {
      console.error(error);
      return;
    }
  }

  listar(): void {
    console.log('\n----------------------------- Lista de Cursos -----------------------------');

    try {
      this.cursos?.forEach(curso => console.log(`| ID: ${curso._id} | Curso: ${curso._nome} |`));
    } catch (error) {
      console.error('Erro ao exibir lista de cursos!', error);
    }

    console.log('---------------------------------------------------------------------------\n');
  }

  consultar(id: number): ICurso | undefined {
    const curso = this.cursos?.find(curso => curso._id === id);

    if (!curso) {
      console.log('Curso não encontrado!');
      return;
    }

    try {
      console.log('\n--------------------------- Descrição do Curso ---------------------------');
      console.log('Curso: ', curso._nome);

      for (let i = 0; i < curso._disciplinas.length; i++) {
        const disciplinaId = curso._disciplinas[i];
        DisciplinaMenu.disciplinaRepository.consultarNome(disciplinaId);
      }

      console.log('--------------------------------------------------------------------------\n');

    } catch (error) {
      console.log(error);
    }
  }

  remover(id: number): void {
    const cursoEncontrado = this.cursos?.find(curso => curso._id === id);

    if (!cursoEncontrado) {
      console.log('\nCurso não encontrado!');
      return;
    }

    try {
      const index = this.cursos?.indexOf(cursoEncontrado);
      this.cursos?.splice(index!, 1);
      console.log('\nCurso removido com sucesso!');
    } catch (error) {
      console.log('\nErro ao remover curso!');
    }
  }
}
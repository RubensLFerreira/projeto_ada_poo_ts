import PromptSync from 'prompt-sync';

import Curso from '../entities/Curso';
import CursoRepository from './../repository/CursoRepository';
import { IListaCurso } from '../interfaces/curso/IListaCurso';

import DisciplinaMenu from './DisciplinaMenu';

const prompt = PromptSync();

export default class CursoMenu {
  static CursoRepository: CursoRepository = new CursoRepository();

  static options() {
    console.log('\n*----- Gerênciamento de curso -----+');
    console.log('| 1 - Cadastrar curso              |');
    console.log('| 2 - Listar cursos                |');
    console.log('| 3 - Consultar curso por id       |');
    console.log('| 4 - Editar curso                 |');
    console.log('| 5 - Remover curso                |');
    console.log('| 6 - Voltar para menu             |');
    console.log('+----------------------------------+');

    return prompt('Selecione uma opção: ');
  }

  static init() {
    while (true) {
      const option = CursoMenu.options();

      switch (option) {
        case '1':
          const curso = CursoMenu.cadastrarCurso();
          CursoMenu.CursoRepository.cadastrar(curso);
          break;
        case '2':
          CursoMenu.CursoRepository.listar();
          break;
        case '3':
          const consultarId = CursoMenu.consultarPorId();
          CursoMenu.CursoRepository.consultar(consultarId);
          break;
        case '4':
          CursoMenu.atualizarCurso();
          break;
        case '5':
          const removerId = CursoMenu.removerCurso();
          CursoMenu.CursoRepository.remover(removerId);
          break;
        case '6':
          return;
      }
    }
  }

  static cadastrarCurso(): Curso {
    console.log('\n--------------------------- Cadastrar Curso ---------------------------');

    DisciplinaMenu.disciplinaRepository.listar();

    const nome = prompt('Digite o NOME do curso: ');

    const disciplinas: Array<number> = [];

    while (true) {
      const disciplinaId = Number(prompt('Digite o ID da disciplina para adicionar ao curso: '));
      const disciplinaEncontrada = DisciplinaMenu.disciplinaRepository.disciplinas?.find(
        (disciplina) => disciplina._id === disciplinaId
      );

      if (disciplinaEncontrada) {
        disciplinas.push(disciplinaId);
        console.log('\nDisciplina adicionada com sucesso!');
      } else {
        console.log('\nDisciplina não encontrada!');
      }

      const continuar = prompt('\nDeseja adicionar outra disciplina? (s/n): ');

      if (continuar === 'n') {
        break;
      }
    }

    console.log('\nCurso cadastrado com sucesso!');

    return new Curso(nome, disciplinas);
  }

  static listarCursos(cursoRepository: IListaCurso): void {
    cursoRepository.listar();
  }

  static consultarPorId(): number {
    return Number(prompt('Digite o ID do curso para consultar: '));
  }

  static atualizarCurso(): void {
    const id = Number(prompt('Digite o ID do curso a ser atualizado: '));

    const cursoEncontrado = CursoMenu.CursoRepository.cursos?.find((curso) => curso._id === id);

    if (cursoEncontrado) {
      const nome = prompt('Digite o NOVO NOME do curso: ');

      const disciplinas: Array<number> = [];

      while (true) {
        const disciplinaId = Number(prompt('Digite o ID da disciplina para adicionar ao curso: '));
        const disciplinaEncontrada = DisciplinaMenu.disciplinaRepository.disciplinas?.find(
          (disciplina) => disciplina._id === disciplinaId
        );

        if (disciplinaEncontrada) {
          disciplinas.push(disciplinaId);
          console.log('\nDisciplina adicionada com sucesso!');
        } else {
          console.log('\nDisciplina não encontrada.');
        }

        const continuar = prompt('Deseja adicionar outra disciplina? (s/n) ');

        if (continuar === 'n') {
          break;
        }
      }

      cursoEncontrado.atualizarDados(nome, disciplinas);
      console.log('\nCurso atualizado com sucesso!');
    } else {
      console.log('\nCurso não encontrado.');
    }
  }

  static removerCurso(): number {
    return Number(prompt('Digite o ID do curso para remover: '));
  }
}
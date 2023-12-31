import * as PromptSync from 'prompt-sync';

import Curso from '../entities/Curso';
import DisciplinaMenu from './DisciplinaMenu';
import CursoRepository from '../repository/CursoRepository';
import { IListaCurso } from '@/interfaces/curso/IListaCurso';

const prompt = PromptSync();

export default class CursoMenu {
  static cursoRepository: CursoRepository = new CursoRepository();

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
    const value = true;

    while (value) {
      const option = CursoMenu.options();
      let id;
      let curso;

      switch (option) {
        case '1':
          curso = CursoMenu.cadastrarCurso();
          if (curso !== undefined) {
            CursoMenu.cursoRepository.cadastrar(curso);
          }
          break;
        case '2':
          CursoMenu.cursoRepository.listar();
          break;
        case '3':
          id = CursoMenu.consultarCurso();
          if (id !== undefined) {
            CursoMenu.cursoRepository.consultar(id);
          }
          break;
        case '4':
          CursoMenu.atualizarCurso();
          break;
        case '5':
          id = CursoMenu.removerCurso();
          if (id !== undefined) {
            CursoMenu.cursoRepository.remover(id);
          }
          break;
        case '6':
          return;
      }
    }
  }

  static cadastrarCurso(): Curso | undefined {
    console.log('\n--------------------------- Cadastrar Curso ---------------------------');

    DisciplinaMenu.disciplinaRepository.listar();

    const nome = prompt('Digite o NOME do curso: ');
    const disciplinas: Array<number> = [];

    if (!nome || !disciplinas) {
      console.log('\nEntrada inválida! Certifique-se de inserir Nome de curso e Disciplinas válidos!');
      return;
    }

    const value = true;

    while (value) {
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

    try {
      console.log('\nCurso cadastrado com sucesso!');
      return new Curso(nome, disciplinas);
    } catch (error) {
      console.log('\nerror!');
    }
  }

  static listarCurso(cursoRepository: IListaCurso): void {
    cursoRepository.listar();
  }

  static consultarCurso() {
    CursoMenu.cursoRepository.listar();

    const id = Number(prompt('\nDigite o ID do curso: '));

    if (isNaN(id)) {
      console.log('\nDigite um ID válido!');
      return;
    }

    try {
      return id;
    } catch (error) {
      console.log('\nErro ao buscar por Cursos: ', error);
    }
  }

  static atualizarCurso(): void {
    CursoMenu.cursoRepository.listar();

    const id = Number(prompt('Digite o ID do curso a ser atualziado: '));

    if (isNaN(id)) {
      console.log('ID inválido!');
    }

    const cursoEncontrado = CursoMenu.cursoRepository.cursos?.find(curso => curso._id === id);

    if (cursoEncontrado === undefined) {
      console.log('\nCurso não encontrado!');
      return;
    }

    const nome = prompt('Digite o novo nome do CURSO: ');
    const disciplinas: Array<number> = [];

    if (!nome || !disciplinas) {
      console.log('\nEntrada inválida! Certifique-se de inserir Nome de curso e Disciplinas válidos!');
      return;
    }

    const value = true;

    while (value) {
      DisciplinaMenu.disciplinaRepository.listar();

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

      const continuar = prompt('\nDejesa adicionar outro disciplina? (s/n): ');

      if (continuar === 'n') {
        break;
      }

    }

    try {
      cursoEncontrado.atualizarDados(nome, disciplinas);
      console.log('\nCurso atualizado com sucesso!');
    } catch (error) {
      console.error('\nErro ao atualizar curso: ', error);
    }
  }

  static removerCurso(): number | undefined {
    CursoMenu.cursoRepository.listar();

    const id = Number(prompt('\nDigite o ID do curso para remove-lo: '));

    if (isNaN(id)) {
      console.log('\nDigite um ID válido!');
      return;
    }

    return id;
  }
}
import PromptSync from 'prompt-sync';

import Aluno from '../entities/Aluno';
import AlunoRepository from './../repository/AlunoRepository';
import { IListaAluno } from '../interfaces/aluno/IListaAluno';

import CursoMenu from './CursoMenu';

const prompt = PromptSync();

export default class AlunoMenu {
  static AlunoRepository: AlunoRepository = new AlunoRepository();

  static options() {
    console.log('\n*----- Gerênciamento de aluno -----+');
    console.log('| 1 - Cadastrar aluno              |');
    console.log('| 2 - Listar alunos                |');
    console.log('| 3 - Consultar aluno por id       |');
    console.log('| 4 - Editar aluno                 |');
    console.log('| 5 - Remover aluno                |');
    console.log('| 6 - Voltar para menu             |');
    console.log('+----------------------------------+');

    return prompt('Selecione uma opção: ');
  }

  static init() {
    while (true) {
      const option = AlunoMenu.options();

      switch (option) {
        case '1':
          const aluno = AlunoMenu.cadastrarAluno();
          AlunoMenu.AlunoRepository.cadastrar(aluno);
          break;
        case '2':
          AlunoMenu.AlunoRepository.listar();
          break;
        case '3':
          const consultarId = AlunoMenu.consultarPorId();
          AlunoMenu.AlunoRepository.consultar(consultarId);
          break;
        case '4':
          AlunoMenu.atualizarAluno();
          break;
        case '5':
          const removerId = AlunoMenu.removerAluno();
          AlunoMenu.AlunoRepository.remover(removerId);
          break;
        case '6':
          return;
      }
    }
  }

  static cadastrarAluno(): Aluno {
    console.log('\n--------------------------- Cadastrar Aluno ---------------------------');

    CursoMenu.CursoRepository.listar();

    const nome = prompt('Digite o NOME do aluno: ');
    const idade = Number(prompt('Digite a IDADE do aluno: '));
    const cursoId = Number(prompt('Digite o ID do curso do aluno: '));

    const cursoEncontrado = CursoMenu.CursoRepository.cursos?.find((curso) => curso._id === cursoId);

    if (cursoEncontrado) {
      console.log('\nCurso encontrado!');
    } else {
      console.log('\nCurso não encontrado!');
    }

    console.log('\nAluno cadastrado com sucesso!');

    return new Aluno(nome, idade, cursoId);
  }

  static listarAlunos(alunoRepository: IListaAluno): void {
    alunoRepository.listar();
  }

  static consultarPorId(): number {
    return Number(prompt('Digite o ID do aluno para consultar: '));
  }

  static atualizarAluno(): void {
    const id = Number(prompt('Digite o ID do aluno a ser atualizado: '));

    const alunoEncontrado = AlunoMenu.AlunoRepository.alunos?.find((aluno) => aluno._id === id);

    if (alunoEncontrado) {
      const nome = prompt('Digite o NOVO NOME do aluno: ');
      const idade = Number(prompt('Digite a NOVA IDADE do aluno: '));
      const cursoId = Number(prompt('Digite o NOVO ID do curso do aluno: '));

      const cursoEncontrado = CursoMenu.CursoRepository.cursos?.find((curso) => curso._id === cursoId);

      if (cursoEncontrado) {
        console.log('\nCurso encontrado!');
      } else {
        console.log('\nCurso não encontrado!');
      }

      alunoEncontrado.atualizarDados(nome, idade, cursoId);
      console.log('\nAluno atualizado com sucesso!');
    } else {
      console.log('\nAluno não encontrado.');
    }
  }

  static removerAluno(): number {
    return Number(prompt('Digite o ID do aluno para remover: '));
  }
}
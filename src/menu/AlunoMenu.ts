import * as PromptSync from 'prompt-sync';

import Aluno from '../entities/Aluno';
import AlunoRepository from '../repository/AlunoRepository';

import CursoMenu from './CursoMenu';

const prompt = PromptSync();

export default class AlunoMenu {
  static alunoRepository: AlunoRepository = new AlunoRepository();

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
    const value = true;

    while (value) {
      const option = AlunoMenu.options();
      let id;
      let aluno;

      switch (option) {
        case '1':
          aluno = AlunoMenu.cadastrarAluno();
          if (aluno !== undefined) {
            AlunoMenu.alunoRepository.cadastrar(aluno);
          }
          break;
        case '2':
          AlunoMenu.listarAlunos();
          break;
        case '3':
          id = AlunoMenu.consultarAluno();
          if (id !== undefined) {
            AlunoMenu.alunoRepository.consultar(id);
          }
          break;
        case '4':
          AlunoMenu.atualizarAluno();
          break;
        case '5':
          console.log('Em construção');
          break;
        case '6':
          return;
      }
    }
  }

  static cadastrarAluno(): Aluno | undefined {
    console.log('\n--------------------------- Cadastrar Aluno ---------------------------');

    CursoMenu.cursoRepository.listar();

    const nome = prompt('Digite o NOME do aluno: ');
    const idade = Number(prompt('Digite o IDADE do aluno: '));
    const curso = Number(prompt('Digite o ID do curso: '));

    if (!nome || !idade || !curso || isNaN(idade) || isNaN(curso)) {
      console.log('\nEntrada inválida! Certifique-se de inserir dados válidos!');
      return;
    }

    try {
      console.log('\nAluno cadastrado com sucesso!');
      return new Aluno(nome, idade, curso);
    } catch (error) {
      console.error('\nErro ao cadastrar Aluno!');
    }
  }

  static listarAlunos(): void {
    return AlunoMenu.alunoRepository.listar();
  }

  static consultarAluno() {
    AlunoMenu.alunoRepository.listarId();

    const id = Number(prompt('Digite o ID do aluno: '));

    if (!id || isNaN(id)) {
      console.log('\nEntrada inválida!');
      return;
    }

    return id;
  }

  static atualizarAluno() {
    AlunoMenu.alunoRepository.listarId();

    const id = Number(prompt('Digite o ID do aluno: '));

    if (!id || isNaN(id)) {
      console.log('\nEntrada inválida!');
      return;
    }

    const AlunoEncontrado = AlunoMenu.alunoRepository.alunos?.find((aluno) => aluno._id === id);

    if (!AlunoEncontrado) {
      console.log('\nAluno não encontrado!');
      return;
    }

    const nome = prompt('Digite o novo nome do aluno: ');
    const idade = Number(prompt('Digite a nova idade do aluno: '));
    const curso = Number(prompt('Digite o novo ID do curso: '));

    if (!nome || !idade || !curso || isNaN(idade) || isNaN(curso)) {
      console.log('\nEntrada inválida! Certifique-se de inserir dados válidos!');
      return;
    }

    try {
      console.log('\nAluno atualizado com sucesso!');
      AlunoEncontrado.atualizarDados(nome, idade, curso);
    } catch (error) {
      console.error('\nErro ao atualizar Aluno!');
    }
  }

  static removerAluno() {
    console.log('\n--------------------------- Remover Aluno ---------------------------\n');

    AlunoMenu.alunoRepository.listarId();

    const id = Number(prompt('Digite o ID do aluno: '));

    if (!id || isNaN(id)) {
      console.log('\nEntrada inválida!');
      return;
    }

    const AlunoEncontrado = AlunoMenu.alunoRepository.alunos?.find((aluno) => aluno._id === id);

    if (!AlunoEncontrado) {
      console.log('\nAluno não encontrado!');
      return;
    }

    try {
      console.log('\nAluno removido com sucesso!');
      AlunoMenu.alunoRepository.remover(id);
    } catch (error) {
      console.error('\nErro ao remover Aluno!');
    }
  }
}

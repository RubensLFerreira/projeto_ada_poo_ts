import * as PromptSync from 'prompt-sync';

import Disciplina from '../entities/Disciplina';
import DisciplinaRepository from '../repository/DisciplinaRepository';
import { IListaDisciplina } from '../interfaces/disciplina/IListaDisciplina';

const prompt = PromptSync();

export default class DisciplinaMenu {
  static disciplinaRepository: DisciplinaRepository = new DisciplinaRepository();

  static options() {
    console.log('\n*----- Gerênciamento de disciplina -----+');
    console.log('| 1 - Cadastrar disciplina              |');
    console.log('| 2 - Listar disciplinas                |');
    console.log('| 3 - Consultar disciplina por id       |');
    console.log('| 4 - Editar disciplina                 |');
    console.log('| 5 - Remover disciplina                |');
    console.log('| 6 - Voltar para menu                  |');
    console.log('+---------------------------------------+\n');

    return prompt('Selecione uma opção: ');
  }
  static init() {
    const value = true;

    while (value) { 
      const option = DisciplinaMenu.options();
      let id;
      let disciplina;

      switch (option) {
        case '1':
          disciplina = DisciplinaMenu.cadastrarDisciplina();
          DisciplinaMenu.disciplinaRepository.cadastrar(disciplina);
          break;
        case '2':
          DisciplinaMenu.disciplinaRepository.listar();
          break;
        case '3':
          id = DisciplinaMenu.consultarDisciplina();
          DisciplinaMenu.disciplinaRepository.consultar(id);
          DisciplinaMenu.disciplinaRepository.consultarNome(id);
          break;
        case '4':
          DisciplinaMenu.atualizarDisciplina();
          break;
        case '5':
          id = DisciplinaMenu.removerDisciplina();
          DisciplinaMenu.disciplinaRepository.remover(id);
          break;
        case '6':
          return;
      }
    }
  }

  static cadastrarDisciplina(): Disciplina {
    console.log('\n--------------------------- Cadastrar Disciplina ---------------------------\n');

    const nome = prompt('Digite o NOME da disciplina: ');
    const descricao = prompt('Digite a DESCRIÇÂO da disciplina: ');
    const cargaHoraria = Number(prompt('Digite a CARGA HORÁRIA da disciplina: '));

    if (!nome || !descricao || isNaN(cargaHoraria)) {
      console.log('\nEntrada inválida! Certifique-se de inserir um nome, descrição e carga horária válidos.');
      DisciplinaMenu.init();
    }

    try {
      console.log('\nDisciplina cadastrada com sucesso!');
      return new Disciplina(nome, descricao, cargaHoraria);
    } catch (error) {
      throw Error('Erro ao cadastrar disciplina: ' + error);
    }
  }

  static listarDisciplinas(DisciplinaRepository: IListaDisciplina): void | undefined {
    DisciplinaRepository.listar();
  }

  static consultarDisciplina() {
    console.log('\n--------------------------- Consultar Disciplina ---------------------------\n');

    const id = Number(prompt('Digite o ID da disciplina: '));

    if (isNaN(id)) {
      console.log('\nID inválido!');
      DisciplinaMenu.init();
    }

    return id;
  }

  static atualizarDisciplina(): void {
    const id = Number(prompt('Digite o ID da disciplina a ser atualizada: '));

    if (isNaN(id)) {
      console.log('\nID inválido!');
      return;
    }

    const disciplinaEncontrada = DisciplinaMenu.disciplinaRepository.disciplinas?.find(
      (disciplina) => disciplina._id === id
    );

    if (disciplinaEncontrada === undefined) {
      console.log('\nDisciplina não encontrada!');
      return;
    }

    const nome = prompt('Digite o NOVO NOME da disciplina: ');
    const descricao = prompt('Digite a NOVA DESCRIÇÂO FINAL da disciplina: ');
    const cargaHoraria = Number(prompt('Digite a NOVA CARGA HORÁRIA da disciplina: '));

    if (!nome || !descricao || isNaN(cargaHoraria)) {
      console.log('\nEntrada inválida! Certifique-se de inserir um nome, descrição e carga horária válidos.');
      return;
    }

    try {
      disciplinaEncontrada.atualizarDados(nome, descricao, cargaHoraria);
      console.log('\nDisciplina atualizada com sucesso!');
    } catch (error) {
      console.error(error);
    }
  }

  static removerDisciplina(): number {
    const id = parseInt(prompt('Digite o ID da disciplina: '));

    if (isNaN(id)) {
      console.log('\nID inválido!');
      DisciplinaMenu.init();
    }

    return id;
  }
}
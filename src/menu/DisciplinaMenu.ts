import PromptSync from 'prompt-sync';

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
    while (true) {
      const option = DisciplinaMenu.options();

      switch (option) {
        case '1':
          const disciplina = DisciplinaMenu.cadastrarDisciplina();
          DisciplinaMenu.disciplinaRepository.cadastrar(disciplina);
          break;
        case '2':
          DisciplinaMenu.disciplinaRepository.listar();
          break;
        case '3':
          const consultarId = DisciplinaMenu.consultarPorId();
          DisciplinaMenu.disciplinaRepository.consultar(consultarId);
          break;
        case '4':
          DisciplinaMenu.atualizarDisciplina();
          break;
        case '5':
          const removerId = DisciplinaMenu.removerDisciplina();
          DisciplinaMenu.disciplinaRepository.remover(removerId);
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

    console.log('\nDisciplina cadastrada com sucesso!');

    return new Disciplina(nome, descricao, cargaHoraria);

  }

  static listarDisciplinas(disciplinaRepository: IListaDisciplina): void {
    disciplinaRepository.listar();
  }

  static consultarPorId(): number {
    return Number(prompt('Digite o ID da disciplina para consultar: '));
  }

  static atualizarDisciplina(): void {
    const id = Number(prompt('Digite o ID da disciplina a ser atualizada: '));
    const disciplinaEncontrada = DisciplinaMenu.disciplinaRepository.disciplinas?.find(
      (disciplina) => disciplina._id === id
    );

    if (disciplinaEncontrada) {
      const nome = prompt('Digite o NOVO NOME da disciplina: ');
      const descricao = prompt('Digite a NOVA DESCRIÇÂO FINAL da disciplina: ');
      const cargaHoraria = Number(prompt('Digite a NOVA CARGA HORÁRIA da disciplina: '));

      disciplinaEncontrada.atualizarDados(nome, descricao, cargaHoraria);
      console.log('\nDisciplina atualizada com sucesso!');
    } else {
      console.log('\nDisciplina não encontrada.');
    }
  }

  static removerDisciplina(): number {
    return Number(prompt('Digite o ID da disciplina para remover: '));
  }
}
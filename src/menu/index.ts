import PromptSync from 'prompt-sync';

import DisciplinaMenu from './DisciplinaMenu';
import CursoMenu from './CursoMenu';
import AlunoMenu from './AlunoMenu';

const prompt = PromptSync();
export default class Menu {

  static options() {
    console.log('\n+------- Menu Principal -------+');
    console.log('| 1 - Gerênciar Aluno          |');
    console.log('| 2 - Gerênciar Curso          |');
    console.log('| 3 - Gerênciar Disciplina     |');
    console.log('| 4 - Sair do sistema          |');
    console.log('+------------------------------+\n');

    return prompt('Selecione uma opção: ');
  }

  static init() {

    while (true) {

      const option = Menu.options();

      switch (option) {
        case '1':
          AlunoMenu.init();
          break;
        case '2':
          CursoMenu.init();
          break;
        case '3':
          DisciplinaMenu.init();
          break;
        case '4':
          return;
      }
    }
  }
}
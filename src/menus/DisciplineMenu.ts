import PromptSync from 'prompt-sync';

import DisciplineController from '../controllers/DisciplineController';

const prompt = PromptSync();

export default class DisciplineMenu {
  static options(): string {
    console.log('\n*----- Discipline Management -----+');
    console.log('| 1 - Register discipline          |');
    console.log('| 2 - List disciplines             |');
    console.log('| 3 - Find discipline by ID        |');
    console.log('| 4 - Edit discipline              |');
    console.log('| 5 - Remove discipline            |');
    console.log('| 6 - Back to menu                 |');
    console.log('+----------------------------------+');

    return prompt('Select an option from the Subjects menu above: ');
  }

  static init(): void {
    const value = true;

    while (value) {
      const option = DisciplineMenu.options();

      switch (option) {
        case '1':
          DisciplineController.registerDiscipline();
          break;
        case '2':
          DisciplineController.getAllDisciplines();
          break;
        case '3':
          DisciplineController.findDiscipline();
          break;
        case '4':
          DisciplineController.updateDiscipline();
          break;
        case '5':
          DisciplineController.deleteDiscipline();
          break;
        case '6':
          return;
        default:
          break;
      }
    }
  }
}

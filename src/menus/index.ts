import PromptSync from 'prompt-sync';

import DisciplineMenu from './DisciplineMenu';
import CourseMenu from './CourseMenu';
import StudentMenu from './StudentMenu';

const prompt = PromptSync();

export default class Menu {
  static options(): string {
    console.log('\n+------- Main Menu -------+');
    console.log('| 1 - Manage Student      |');
    console.log('| 2 - Manage Course       |');
    console.log('| 3 - Manage Discipline   |');
    console.log('| 4 - Exit System         |');
    console.log('+-------------------------+\n');

    return prompt('Select an option from the main menu above: ');
  }

  static init(): void{
    const value = true;

    while (value) {
      const option = Menu.options();
      switch (option) {
        case '1':
          StudentMenu.init();
          break;
        case '2':
          CourseMenu.init();
          break;
        case '3':
          DisciplineMenu.init();
          break;
        case '4':
          return;
      }
    }
  }
}

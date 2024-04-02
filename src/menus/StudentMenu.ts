import PromptSync from 'prompt-sync';
import Menu from './index';

import StudentController from '../controllers/StudentController';

const prompt = PromptSync();

export default class StudentMenu {
  static options(): string {
    console.log('\n*----- Student Management -----+');
    console.log('| 1 - Register student          |');
    console.log('| 2 - List students             |');
    console.log('| 3 - Search student by ID      |');
    console.log('| 4 - Edit student              |');
    console.log('| 5 - Remove student            |');
    console.log('| 6 - Back to menu              |');
    console.log('+------------------------------+');

    return prompt('Select an option: ');
  }

  static init(): void {
    const value = true;

    while (value) {
      const option = StudentMenu.options();

      switch (option) {
        case '1':
          StudentController.registerStudent();
          break;
        case '2':
          StudentController.getAllStudents();
          break;
        case '3':
          StudentController.findStudent();
          break;
        case '4':
          StudentController.updateStudent();
          break;
        case '5':
          StudentController.deleteStudent();
          break;
        case '6':
          Menu.init();
          break;
      }
    }
  }
}

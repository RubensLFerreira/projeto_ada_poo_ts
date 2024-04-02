import PromptSync from 'prompt-sync';
import Menu from './index';

import CourseController from '../controllers/CourseController';

const prompt = PromptSync();

export default class CourseMenu {
  static options(): string {
    console.log('\n*----- Course Management -----+');
    console.log('| 1 - Register course         |');
    console.log('| 2 - List courses            |');
    console.log('| 3 - Search course by ID     |');
    console.log('| 4 - Edit course             |');
    console.log('| 5 - Remove course           |');
    console.log('| 6 - Back to menu            |');
    console.log('+----------------------------+');

    return prompt('Select an option: ');
  }

  static init(): void {
    const value = true;

    while (value) {
      const option = CourseMenu.options();

      switch (option) {
        case '1':
          CourseController.registerCourse();
          break; 
        case '2':
          CourseController.getAllCourses();
          break;
        case '3':
          CourseController.findCourse();
          break;
        case '4':
          CourseController.updateCourse();
          break;
        case '5':
          CourseController.deleteCourse();
          break;
        case '6':
          Menu.init();
          break;
      }
    }
  }
}

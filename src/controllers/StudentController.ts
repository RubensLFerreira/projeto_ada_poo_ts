import PromptSync from 'prompt-sync';

import Generator from '../utils/Generator';
import Validator from '../utils/errors/validator';
import CourseController from './CourseController';
import StudentRepository from '../repositories/StudentRepository';

const value = true;
const prompt = PromptSync();
const studentRepository: StudentRepository = new StudentRepository();

export default class StudentController {
  static registerStudent(): void {
    console.log('\n--------------------------- Register Student ---------------------------\n');

    const _id = Generator.generateId();
    const _name = prompt('Enter the name of the student: ');
    const _registration = Generator.generatorRegistration();
    let _dueDate = '';
    let _email = '';
    let _course = 0;

    while (value) {
      const dueDate = prompt('Enter the due date of the student (DD-MM-YYYY): ');
      const dueDateIsValid = Validator.DueDateIsValid(dueDate);

      const email = prompt('\nEnter the email of the student: ');
      const emailIsValid = Validator.validatorEmail(email);

      CourseController.getAllCourses();
      const course = Number(prompt('\nEnter the students course ID: ').trim());
      const courseIsValid = CourseController.getCourseById(course);

      if (courseIsValid && emailIsValid && dueDateIsValid) {
        _dueDate = dueDate;
        _course = course;
        _email = email;
        break;
      }
    }

    try {
      Validator.validateStudent({
        _id,
        _name,
        _dueDate,
        _email,
        _course,
      });

      const response = studentRepository.register({
        _id,
        _name,
        _dueDate,
        _email,
        _registration,
        _course,
      });

      console.log('\nStudent successfully registered!\n');
      console.log(response);
    } catch (error: any) {
      console.log('\nError registering student: ', error.message);
    }
  }

  static getAllStudents(): void {
    console.log('\n--------------------------- List of Students ---------------------------\n');

    try {
      const response = studentRepository.getAll();
      console.log(response);
    } catch (error: any) {
      console.log('\nError listing students: ', error.message);
    }
  }

  static findStudent(): void {
    console.log('\n--------------------------- Find Student ---------------------------\n');

    try {
      const _id = Number(prompt('Enter the ID of the student: '));

      Validator.idIsValid(_id);

      const resposne = studentRepository.getById({ _id });
      console.log(resposne);
    } catch (error: any) {
      console.log('\nError finding student: ', error.message);
    }
  }

  static updateStudent(): void {
    console.log('\n--------------------------- Update Student ---------------------------\n');

    const _id = Generator.generateId();
    const _name = prompt('Enter the name of the student: ');
    let _dueDate = '';
    let _email = '';
    let _course = 0;

    while (value) {
      const dueDate = prompt('Enter the due date of the student (DD-MM-YYYY): ');
      const dueDateIsValid = Validator.DueDateIsValid(dueDate);

      const email = prompt('\nEnter the email of the student: ');
      const emailIsValid = Validator.validatorEmail(email);

      CourseController.getAllCourses();
      const course = Number(prompt('\nEnter the students course ID: ').trim());
      const courseIsValid = CourseController.getCourseById(course);

      if (courseIsValid && emailIsValid && dueDateIsValid) {
        _dueDate = dueDate;
        _course = course;
        _email = email;
        break;
      }
    }

    try {
      Validator.validateStudent({
        _id,
        _name,
        _dueDate,
        _email,
        _course,
      });

      const response = studentRepository.updateById({
        _id,
        _name,
        _dueDate,
        _email,
        _course,
      });

      console.log('\nStudent successfully updated!\n');
      console.log(response);
    } catch (error: any) {
      console.log('\nError updating student: ', error.message);
    }
  }

  static deleteStudent(): void {
    try {
      console.log('\n--------------------------- Delete Student ---------------------------\n');

      const _id = Number(prompt('Enter the ID of the student: '));

      Validator.idIsValid(_id);

      const response = studentRepository.deleteById({ _id });

      console.log('\nStudent successfully deleted!\n');
      console.log(response);
    } catch (error: any) {
      console.log('\nError deleting student: ', error.message);
    }
  }
}

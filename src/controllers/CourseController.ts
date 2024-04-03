import PromptSync from 'prompt-sync';

import CourseRepository from '../repositories/CourseRepository';
import DisciplineController from './DisciplineController';
import Validator from '../utils/errors/validator';
import Generator from '../utils/Generator';
import { ICourse } from '../interfaces/course/ICourse';
import { ICourseController } from '../interfaces/course/ICourseController';

const value = true;
const prompt = PromptSync();
const courseRepository = new CourseRepository();

export default class CourseController implements ICourseController {
  registerCourse(): ICourse | undefined {
    console.log('\n--------------------------- Course Discipline ---------------------------\n');

    const _id = Generator.generateId();
    const _name = prompt('Enter the name of the Course: ');
    const _institution = prompt('Enter the institution of the Course: ');
    const _duration = Number(prompt('How long is the course? (semesters): '));
    const _disciplines: number[] = [];

    DisciplineController.getAllDisciplines();

    while (value) {
      const _id = Number(prompt('\nEnter the ID of the course you want to add: ').trim());

      const disciplineIsValid = DisciplineController.getDisciplineById(_id);

      if (disciplineIsValid) {
        _disciplines.push(_id);
        console.log('\nDiscipline added successfully!');
      } else {
        console.log('\nUnable to add discipline');
      }

      const continuar = prompt('\nDo you want to add more subjects? (yes/no): ').trim().toLowerCase();

      if (continuar !== 'yes' && continuar !== 'no') {
        console.log('\nInvalid option! Please enter "yes" or "no"');
        return;
      } else if (continuar === 'no') {
        break;
      }
    }
    try {
      Validator.validateCourse({
        _id,
        _name,
        _institution,
        _duration,
        _disciplines,
      });

      const response = courseRepository.register({
        _id,
        _name,
        _institution,
        _duration,
        _disciplines,
      });

      console.log('\nCourse successfully created!');
      console.log(response);
      return response;
    } catch (error: any) {
      console.log('Error when registering a new course: ', error.message);
      return error.message;
    }
  }

  static getAllCourses(): void {
    try {
      console.log('\n--------------------------- All Courses ---------------------------\n');

      const response = courseRepository.getAll();
      console.log(response);
    } catch (error: any) {
      console.log('Error when listing all courses: ', error.message);
    }
  }

  static findCourse(): void {
    try {
      console.log('\n--------------------------- Find Course ---------------------------\n');

      const courseId = Number(prompt('Enter the ID of the course you want to find: '));

      const response = courseRepository.getById(courseId);
      console.log(response);
    } catch (error: any) {
      console.log('Error when finding a course: ', error.message);
    }
  }

  static getCourseById(_id: number): ICourse | undefined {
    try {
      const response = courseRepository.getByIdCourse({ _id });
      return response;
    } catch (error: any) {
      console.log('Error when finding a course: ', error.message);
      return undefined;
    }
  }

  static updateCourse(): void {
    console.log('\n--------------------------- Update Course ---------------------------\n');

    const courseId = Number(prompt('Enter the ID of the course you want to update: ').trim());

    const courseNotFound = CourseController.getCourseById(courseId);

    if (!courseNotFound) {
      return;
    }

    const _name = prompt('Enter the new name of the Course: ');
    const _institution = prompt('Enter the new institution of the Course: ');
    const _duration = Number(prompt('How long is the course? (semesters): '));
    const _disciplines: number[] = [];

    DisciplineController.getAllDisciplines();

    while (value) {
      const _id = Number(prompt('\nEnter the ID of the course you want to add: ').trim());

      const DisciplineIsValid = DisciplineController.getDisciplineById(_id);

      if (DisciplineIsValid) {
        _disciplines.push(_id);
        console.log('\nDiscipline added successfully!');
      } else {
        console.log('\nUnable to add discipline');
        return;
      }

      const continuar = prompt('\nDo you want to add more subjects? (yes/no): ').trim().toLowerCase();

      if (continuar !== 'yes' && continuar !== 'no') {
        console.log('\nInvalid option! Please enter "yes" or "no"');
        return;
      } else if (continuar === 'no') {
        break;
      }
    }

    try {
      Validator.validateCourse({
        _id: courseId,
        _name,
        _institution,
        _duration,
        _disciplines,
      });

      const response = courseRepository.updateById({
        _id: courseId,
        _name,
        _institution,
        _duration,
        _disciplines,
      });

      if (response) {
        console.log('\nCourse successfully updated!');
        console.log(response);
      }
    } catch (error: any) {
      console.log('Error when updating a course: ', error.message);
    }
  }

  static deleteCourse(): void {
    try {
      console.log('\n--------------------------- Delete Course ---------------------------\n');

      const courseId = Number(prompt('Enter the ID of the course you want to delete: '));

      Validator.idIsValid(courseId);

      const courseNotFound = CourseController.getCourseById(courseId);

      if (!courseNotFound) {
        return;
      }

      const response = courseRepository.deleteById(courseId);

      if (response) {
        console.log('\nCourse successfully deleted!');
        console.log(response);
      }
    } catch (error: any) {
      console.log('Error when deleting a course: ', error.message);
    }
  }
}

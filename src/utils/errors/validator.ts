import { IStudent } from '@src/interfaces/student/IStudent';
import { ICourse } from '../../interfaces/course/ICourse';
import { IDiscipline } from '../../interfaces/discipline/IDiscipline';

export default class Validator {
  static idIsValid(_id: number): boolean {
    if (!_id) {
      if (isNaN(_id)) {
        console.log('\nError! Fill in the fields with valid values.');
        return false;
      }
      console.log('\nError! Fill in all required fields.');
      return false;
    }
    return true;
  }

  static validateCourse(course: ICourse): boolean {
    if (!course._id || !course._name || !course._institution || !course._duration || !course._disciplines) {
      if (isNaN(course._duration)) {
        console.log('\nError! Fill in the fields with valid values.');
        return false;
      }
      console.log('\nError! Fill in all required fields.');
      return false;
    }
    return true;
  }

  static validateDiscipline(discipline: IDiscipline): boolean {
    if (!discipline._id || !discipline._name || !discipline._description || !discipline._workload) {
      if (isNaN(discipline._workload)) {
        console.log('\nError! Fill in the fields with valid values.');
        return false;
      }
      console.log('\nError! Fill in all required fields.');
      return false;
    }
    return true;
  }

  static validateStudent(student: IStudent): boolean {
    if (!student._id || !student._name || !student._dueDate || !student._email || !student._registration) {
      console.log('\nError! Fill in all required fields.');
      return false;
    }
    return true;
  }

  static validatorEmail(_email: string): boolean {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if (!emailRegex.test(_email)) {
      console.log('\nEmail is not valid!');
      return false;
    }
    return true;
  }

  static DueDateIsValid(_dueDate: string): boolean {
    const dateRegex = /(^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$)/;

    if (!dateRegex.test(_dueDate)) {
      console.log('\nDue date is not valid!');
      return false;
    }
    return true;
  }
}

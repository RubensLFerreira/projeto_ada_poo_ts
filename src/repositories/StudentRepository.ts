import { IStudent } from '../interfaces/student/IStudent';
import { IStudentRepository } from '../interfaces/student/IStudentRepository';

export default class StudentRepository implements IStudentRepository {
  students: IStudent[] = [];

  register(student: IStudent): IStudent | undefined {
    const studentExists = this.students.find((item) => item._email === student._email);

    if (studentExists) {
      console.log('Student already exists');
      return;
    }

    this.students.push(student);
    return student;
  }

  getAll(): IStudent[] | undefined {
    const arr: IStudent[] = [];

    if (this.students.length === 0) {
      console.log('No students registered');
      return;
    }

    this.students.forEach((item) => arr.push(item));
    return arr;
  }

  getById(student: Pick<IStudent, '_id'>): IStudent | undefined {
    const studentExist = this.students.findIndex((item) => item._id === student._id);

    if (studentExist === -1) {
      console.log('Student not found!');
      return;
    }

    return this.students[studentExist];
  }

  updateById(student: Omit<IStudent, '_registration'>): IStudent | undefined {
    const studentExist = this.students.findIndex((item) => item._id === student._id);

    if (studentExist === -1) {
      console.log('Student not found!');
      return;
    }

    const studantUpdate = (this.students[studentExist] = {
      ...student,
      _registration: this.students[studentExist]._registration,
    });
    return studantUpdate;
  }

  deleteById(student: Pick<IStudent, '_id'>): IStudent | undefined {
    const studentExist = this.students.findIndex((item) => item._id === student._id);

    if (studentExist === -1) {
      console.log('Student not found!');
      return;
    }

    const studentFind = this.students[studentExist];

    this.students.splice(studentExist, 1);
    return studentFind;
  }
}

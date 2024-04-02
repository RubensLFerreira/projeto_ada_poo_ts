import { IStudent } from '../interfaces/student/IStudent';

export default class Student implements IStudent {
  _id: number;
  _name: string;
  _dueDate: string;
  _email: string;
  _registration: number;
  _course: number;

  constructor(id: number, name: string, dueDate: string, email: string, registration: number, course: number) {
    this._id = id;
    this._name = name;
    this._dueDate = dueDate;
    this._email = email;
    this._registration = registration;
    this._course = course;
  }
}
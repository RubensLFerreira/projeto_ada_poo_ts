import { IStudent } from './IStudent';

export interface IStudentRepository {
  students: Array<IStudent>;
  register(course: IStudent): IStudent | undefined;
  getAll(): IStudent[] | undefined;
  getById(student: Pick<IStudent, '_id'>): IStudent | undefined;
  updateById(student: Omit<IStudent, '_registration'>): IStudent | undefined;
  deleteById(student: Pick<IStudent, '_id'>): IStudent | undefined;
}
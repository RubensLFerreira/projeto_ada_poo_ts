import { ICourse } from './ICourse';

export interface ICourseRepository {
  courses: Array<ICourse> | undefined;
  register(course: ICourse): ICourse | undefined;
  getAll(): ICourse[] | undefined;
  getById(id: number): ICourse | undefined;
  updateById(updatedCourse: ICourse): ICourse | undefined;
  deleteById(id: number): ICourse | undefined;
}
import { ICourse } from './ICourse';

export interface ICourseController {
  registerCourse(): ICourse | undefined;
}
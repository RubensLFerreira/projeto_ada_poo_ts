import { ICourse } from '../interfaces/course/ICourse';
import { ICourseRepository } from '../interfaces/course/ICourseRepository';

export default class CourseRepository implements ICourseRepository {
  courses: ICourse[] = [];

  register(course: ICourse): ICourse | undefined {
    const courseExists = this.courses.find((item) => item._name === course._name);

    if (courseExists) {
      console.log('\nThere is already a course with this name');
      return;
    }

    this.courses.push(course);
    return course;
  }

  getAll(): ICourse[] | undefined {
    const arr: ICourse[] = [];
    this.courses.forEach((item) => arr.push(item));

    if (arr.length === 0) {
      console.log('No courses found!');
      return;
    }
    return arr;
  }

  getById(id: number): ICourse | undefined {
    const courseExists = this.courses.findIndex((item) => item._id === id);

    if (courseExists === -1) {
      console.log('Course not found!');
      return;
    }

    return this.courses[courseExists];
  }

  getByIdCourse(id: Pick<ICourse, '_id'>): ICourse | undefined {
    const courseExistis = this.courses.find((item) => item._id === id._id);

    if (!courseExistis) {
      console.log('\nCourse not found!');
      return;
    }

    return courseExistis;
  }

  updateById(updatedCourse: ICourse): ICourse | undefined {
    const index = this.courses.findIndex((item) => item._id === updatedCourse._id);

    if (index === -1) {
      console.log('Course not found!');
      return;
    }

    this.courses[index] = { ...updatedCourse };
    return updatedCourse;
  }

  deleteById(id: number): ICourse | undefined {
    const index = this.courses.findIndex((item) => item._id === id);

    if (index === -1) {
      console.log('Course not found!');
      return;
    }

    const course = this.courses[index];
    this.courses.splice(index, 1);
    return course;
  }
}

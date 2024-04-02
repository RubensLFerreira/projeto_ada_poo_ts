"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CourseRepository {
    constructor() {
        this.courses = [];
    }
    register(course) {
        const courseExists = this.courses.find((item) => item._name === course._name);
        if (courseExists) {
            console.log('\nThere is already a course with this name');
            return;
        }
        this.courses.push(course);
        return course;
    }
    getAll() {
        const arr = [];
        this.courses.forEach((item) => arr.push(item));
        if (arr.length === 0) {
            console.log('No courses found!');
            return;
        }
        return arr;
    }
    getById(id) {
        const courseExists = this.courses.findIndex((item) => item._id === id);
        if (courseExists === -1) {
            console.log('Course not found!');
            return;
        }
        return this.courses[courseExists];
    }
    getByIdCourse(id) {
        const courseExistis = this.courses.find((item) => item._id === id._id);
        if (!courseExistis) {
            console.log('\nCourse not found!');
            return;
        }
        return courseExistis;
    }
    updateById(updatedCourse) {
        const index = this.courses.findIndex((item) => item._id === updatedCourse._id);
        if (index === -1) {
            console.log('Course not found!');
            return;
        }
        this.courses[index] = { ...updatedCourse };
        return updatedCourse;
    }
    deleteById(id) {
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
exports.default = CourseRepository;
//# sourceMappingURL=CourseRepository.js.map
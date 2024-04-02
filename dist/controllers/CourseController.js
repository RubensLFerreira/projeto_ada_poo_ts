"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const CourseRepository_1 = __importDefault(require("../repositories/CourseRepository"));
const DisciplineController_1 = __importDefault(require("./DisciplineController"));
const validator_1 = __importDefault(require("../utils/errors/validator"));
const Generator_1 = __importDefault(require("../utils/Generator"));
const value = true;
const prompt = (0, prompt_sync_1.default)();
const courseRepository = new CourseRepository_1.default();
class CourseController {
    static registerCourse() {
        console.log('\n--------------------------- Course Discipline ---------------------------\n');
        const _id = Generator_1.default.generateId();
        const _name = prompt('Enter the name of the Course: ');
        const _institution = prompt('Enter the institution of the Course: ');
        const _duration = Number(prompt('How long is the course? (semesters): '));
        const _disciplines = [];
        DisciplineController_1.default.getAllDisciplines();
        while (value) {
            const _id = Number(prompt('\nEnter the ID of the course you want to add: ').trim());
            const disciplineIsValid = DisciplineController_1.default.getDisciplineById(_id);
            if (disciplineIsValid) {
                _disciplines.push(_id);
                console.log('\nDiscipline added successfully!');
            }
            else {
                console.log('\nUnable to add discipline');
            }
            const continuar = prompt('\nDo you want to add more subjects? (yes/no): ').trim().toLowerCase();
            if (continuar !== 'yes' && continuar !== 'no') {
                console.log('\nInvalid option! Please enter "yes" or "no"');
                return;
            }
            else if (continuar === 'no') {
                break;
            }
        }
        try {
            validator_1.default.validateCourse({
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
        }
        catch (error) {
            console.log('Error when registering a new course: ', error.message);
        }
    }
    static getAllCourses() {
        try {
            console.log('\n--------------------------- All Courses ---------------------------\n');
            const response = courseRepository.getAll();
            console.log(response);
        }
        catch (error) {
            console.log('Error when listing all courses: ', error.message);
        }
    }
    static findCourse() {
        try {
            console.log('\n--------------------------- Find Course ---------------------------\n');
            const courseId = Number(prompt('Enter the ID of the course you want to find: '));
            const response = courseRepository.getById(courseId);
            console.log(response);
        }
        catch (error) {
            console.log('Error when finding a course: ', error.message);
        }
    }
    static getCourseById(_id) {
        try {
            const response = courseRepository.getByIdCourse({ _id });
            return response;
        }
        catch (error) {
            console.log('Error when finding a course: ', error.message);
            return undefined;
        }
    }
    static updateCourse() {
        console.log('\n--------------------------- Update Course ---------------------------\n');
        const courseId = Number(prompt('Enter the ID of the course you want to update: ').trim());
        const courseNotFound = CourseController.getCourseById(courseId);
        if (!courseNotFound) {
            return;
        }
        const _name = prompt('Enter the new name of the Course: ');
        const _institution = prompt('Enter the new institution of the Course: ');
        const _duration = Number(prompt('How long is the course? (semesters): '));
        const _disciplines = [];
        DisciplineController_1.default.getAllDisciplines();
        while (value) {
            const _id = Number(prompt('\nEnter the ID of the course you want to add: ').trim());
            const DisciplineIsValid = DisciplineController_1.default.getDisciplineById(_id);
            if (DisciplineIsValid) {
                _disciplines.push(_id);
                console.log('\nDiscipline added successfully!');
            }
            else {
                console.log('\nUnable to add discipline');
                return;
            }
            const continuar = prompt('\nDo you want to add more subjects? (yes/no): ').trim().toLowerCase();
            if (continuar !== 'yes' && continuar !== 'no') {
                console.log('\nInvalid option! Please enter "yes" or "no"');
                return;
            }
            else if (continuar === 'no') {
                break;
            }
        }
        try {
            validator_1.default.validateCourse({
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
        }
        catch (error) {
            console.log('Error when updating a course: ', error.message);
        }
    }
    static deleteCourse() {
        try {
            console.log('\n--------------------------- Delete Course ---------------------------\n');
            const courseId = Number(prompt('Enter the ID of the course you want to delete: '));
            validator_1.default.idIsValid(courseId);
            const courseNotFound = CourseController.getCourseById(courseId);
            if (!courseNotFound) {
                return;
            }
            const response = courseRepository.deleteById(courseId);
            if (response) {
                console.log('\nCourse successfully deleted!');
                console.log(response);
            }
        }
        catch (error) {
            console.log('Error when deleting a course: ', error.message);
        }
    }
}
exports.default = CourseController;
//# sourceMappingURL=CourseController.js.map
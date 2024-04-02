"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Generator_1 = __importDefault(require("../utils/Generator"));
const validator_1 = __importDefault(require("../utils/errors/validator"));
const CourseController_1 = __importDefault(require("./CourseController"));
const StudentRepository_1 = __importDefault(require("../repositories/StudentRepository"));
const value = true;
const prompt = (0, prompt_sync_1.default)();
const studentRepository = new StudentRepository_1.default();
class StudentController {
    static registerStudent() {
        console.log('\n--------------------------- Register Student ---------------------------\n');
        const _id = Generator_1.default.generateId();
        const _name = prompt('Enter the name of the student: ');
        const _registration = Generator_1.default.generatorRegistration();
        let _dueDate = '';
        let _email = '';
        let _course = 0;
        while (value) {
            const dueDate = prompt('Enter the due date of the student (DD-MM-YYYY): ');
            const dueDateIsValid = validator_1.default.DueDateIsValid(dueDate);
            const email = prompt('\nEnter the email of the student: ');
            const emailIsValid = validator_1.default.validatorEmail(email);
            CourseController_1.default.getAllCourses();
            const course = Number(prompt('\nEnter the students course ID: ').trim());
            const courseIsValid = CourseController_1.default.getCourseById(course);
            if (courseIsValid && emailIsValid && dueDateIsValid) {
                _dueDate = dueDate;
                _course = course;
                _email = email;
                break;
            }
        }
        try {
            validator_1.default.validateStudent({
                _id,
                _name,
                _dueDate,
                _email,
                _course,
            });
            const response = studentRepository.register({
                _id,
                _name,
                _dueDate,
                _email,
                _registration,
                _course,
            });
            console.log('\nStudent successfully registered!\n');
            console.log(response);
        }
        catch (error) {
            console.log('\nError registering student: ', error.message);
        }
    }
    static getAllStudents() {
        console.log('\n--------------------------- List of Students ---------------------------\n');
        try {
            const response = studentRepository.getAll();
            console.log(response);
        }
        catch (error) {
            console.log('\nError listing students: ', error.message);
        }
    }
    static findStudent() {
        console.log('\n--------------------------- Find Student ---------------------------\n');
        try {
            const _id = Number(prompt('Enter the ID of the student: '));
            validator_1.default.idIsValid(_id);
            const resposne = studentRepository.getById({ _id });
            console.log(resposne);
        }
        catch (error) {
            console.log('\nError finding student: ', error.message);
        }
    }
    static updateStudent() {
        console.log('\n--------------------------- Update Student ---------------------------\n');
        const _id = Generator_1.default.generateId();
        const _name = prompt('Enter the name of the student: ');
        let _dueDate = '';
        let _email = '';
        let _course = 0;
        while (value) {
            const dueDate = prompt('Enter the due date of the student (DD-MM-YYYY): ');
            const dueDateIsValid = validator_1.default.DueDateIsValid(dueDate);
            const email = prompt('\nEnter the email of the student: ');
            const emailIsValid = validator_1.default.validatorEmail(email);
            CourseController_1.default.getAllCourses();
            const course = Number(prompt('\nEnter the students course ID: ').trim());
            const courseIsValid = CourseController_1.default.getCourseById(course);
            if (courseIsValid && emailIsValid && dueDateIsValid) {
                _dueDate = dueDate;
                _course = course;
                _email = email;
                break;
            }
        }
        try {
            validator_1.default.validateStudent({
                _id,
                _name,
                _dueDate,
                _email,
                _course,
            });
            const response = studentRepository.updateById({
                _id,
                _name,
                _dueDate,
                _email,
                _course,
            });
            console.log('\nStudent successfully updated!\n');
            console.log(response);
        }
        catch (error) {
            console.log('\nError updating student: ', error.message);
        }
    }
    static deleteStudent() {
        try {
            console.log('\n--------------------------- Delete Student ---------------------------\n');
            const _id = Number(prompt('Enter the ID of the student: '));
            validator_1.default.idIsValid(_id);
            const response = studentRepository.deleteById({ _id });
            console.log('\nStudent successfully deleted!\n');
            console.log(response);
        }
        catch (error) {
            console.log('\nError deleting student: ', error.message);
        }
    }
}
exports.default = StudentController;
//# sourceMappingURL=StudentController.js.map
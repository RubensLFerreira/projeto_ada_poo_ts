"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentRepository {
    constructor() {
        this.students = [];
    }
    register(student) {
        const studentExists = this.students.find((item) => item._email === student._email);
        if (studentExists) {
            console.log('Student already exists');
            return;
        }
        this.students.push(student);
        return student;
    }
    getAll() {
        const arr = [];
        if (this.students.length === 0) {
            console.log('No students registered');
            return;
        }
        this.students.forEach((item) => arr.push(item));
        return arr;
    }
    getById(student) {
        const studentExist = this.students.findIndex((item) => item._id === student._id);
        if (studentExist === -1) {
            console.log('Student not found!');
            return;
        }
        return this.students[studentExist];
    }
    updateById(student) {
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
    deleteById(student) {
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
exports.default = StudentRepository;
//# sourceMappingURL=StudentRepository.js.map
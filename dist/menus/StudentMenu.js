"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const index_1 = __importDefault(require("./index"));
const StudentController_1 = __importDefault(require("../controllers/StudentController"));
const prompt = (0, prompt_sync_1.default)();
class StudentMenu {
    static options() {
        console.log('\n*----- Student Management -----+');
        console.log('| 1 - Register student          |');
        console.log('| 2 - List students             |');
        console.log('| 3 - Search student by ID      |');
        console.log('| 4 - Edit student              |');
        console.log('| 5 - Remove student            |');
        console.log('| 6 - Back to menu              |');
        console.log('+------------------------------+');
        return prompt('Select an option: ');
    }
    static init() {
        const value = true;
        while (value) {
            const option = StudentMenu.options();
            switch (option) {
                case '1':
                    StudentController_1.default.registerStudent();
                    break;
                case '2':
                    StudentController_1.default.getAllStudents();
                    break;
                case '3':
                    StudentController_1.default.findStudent();
                    break;
                case '4':
                    StudentController_1.default.updateStudent();
                    break;
                case '5':
                    StudentController_1.default.deleteStudent();
                    break;
                case '6':
                    index_1.default.init();
                    break;
            }
        }
    }
}
exports.default = StudentMenu;
//# sourceMappingURL=StudentMenu.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const index_1 = __importDefault(require("./index"));
const CourseController_1 = __importDefault(require("../controllers/CourseController"));
const prompt = (0, prompt_sync_1.default)();
class CourseMenu {
    static options() {
        console.log('\n*----- Course Management -----+');
        console.log('| 1 - Register course         |');
        console.log('| 2 - List courses            |');
        console.log('| 3 - Search course by ID     |');
        console.log('| 4 - Edit course             |');
        console.log('| 5 - Remove course           |');
        console.log('| 6 - Back to menu            |');
        console.log('+----------------------------+');
        return prompt('Select an option: ');
    }
    static init() {
        const value = true;
        while (value) {
            const option = CourseMenu.options();
            switch (option) {
                case '1':
                    CourseController_1.default.registerCourse();
                    break;
                case '2':
                    CourseController_1.default.getAllCourses();
                    break;
                case '3':
                    CourseController_1.default.findCourse();
                    break;
                case '4':
                    CourseController_1.default.updateCourse();
                    break;
                case '5':
                    CourseController_1.default.deleteCourse();
                    break;
                case '6':
                    index_1.default.init();
                    break;
            }
        }
    }
}
exports.default = CourseMenu;
//# sourceMappingURL=CourseMenu.js.map
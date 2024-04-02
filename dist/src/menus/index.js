"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const DisciplineMenu_1 = __importDefault(require("./DisciplineMenu"));
const CourseMenu_1 = __importDefault(require("./CourseMenu"));
const StudentMenu_1 = __importDefault(require("./StudentMenu"));
const prompt = (0, prompt_sync_1.default)();
class Menu {
    static options() {
        console.log('\n+------- Main Menu -------+');
        console.log('| 1 - Manage Student      |');
        console.log('| 2 - Manage Course       |');
        console.log('| 3 - Manage Discipline   |');
        console.log('| 4 - Exit System         |');
        console.log('+-------------------------+\n');
        return prompt('Select an option from the main menu above: ');
    }
    static init() {
        const value = true;
        while (value) {
            const option = Menu.options();
            switch (option) {
                case '1':
                    StudentMenu_1.default.init();
                    break;
                case '2':
                    CourseMenu_1.default.init();
                    break;
                case '3':
                    DisciplineMenu_1.default.init();
                    break;
                case '4':
                    return;
            }
        }
    }
}
exports.default = Menu;
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const DisciplineController_1 = __importDefault(require("../controllers/DisciplineController"));
const prompt = (0, prompt_sync_1.default)();
class DisciplineMenu {
    static options() {
        console.log('\n*----- Discipline Management -----+');
        console.log('| 1 - Register discipline          |');
        console.log('| 2 - List disciplines             |');
        console.log('| 3 - Find discipline by ID        |');
        console.log('| 4 - Edit discipline              |');
        console.log('| 5 - Remove discipline            |');
        console.log('| 6 - Back to menu                 |');
        console.log('+----------------------------------+');
        return prompt('Select an option from the Subjects menu above: ');
    }
    static init() {
        const value = true;
        while (value) {
            const option = DisciplineMenu.options();
            switch (option) {
                case '1':
                    DisciplineController_1.default.registerDiscipline();
                    break;
                case '2':
                    DisciplineController_1.default.getAllDisciplines();
                    break;
                case '3':
                    DisciplineController_1.default.findDiscipline();
                    break;
                case '4':
                    DisciplineController_1.default.updateDiscipline();
                    break;
                case '5':
                    DisciplineController_1.default.deleteDiscipline();
                    break;
                case '6':
                    return;
                default:
                    break;
            }
        }
    }
}
exports.default = DisciplineMenu;
//# sourceMappingURL=DisciplineMenu.js.map
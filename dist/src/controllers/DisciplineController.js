"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const DisciplineRepository_1 = __importDefault(require("../repositories/DisciplineRepository"));
const Generator_1 = __importDefault(require("../utils/Generator"));
const validator_1 = __importDefault(require("../utils/errors/validator"));
const prompt = (0, prompt_sync_1.default)();
const disciplineRepository = new DisciplineRepository_1.default();
class DisciplineController {
    static registerDiscipline() {
        console.log('\n--------------------------- Register Discipline ---------------------------\n');
        const _id = Generator_1.default.generateId();
        const _name = prompt('Enter the name of the Discipline: ');
        const _description = prompt('Enter the description of the Discipline: ');
        const _workload = Number(prompt('Enter the workload of the Discipline: '));
        try {
            validator_1.default.validateDiscipline({
                _id,
                _name,
                _description,
                _workload,
            });
            const response = disciplineRepository.register({
                _id,
                _name,
                _description,
                _workload,
            });
            console.log('\nDiscipline successfully created!');
            console.log(response);
        }
        catch (error) {
            console.log('Error when registering a new discipline: ', error.message);
        }
    }
    static getAllDisciplines() {
        console.log('\n--------------------------- All Disciplines ---------------------------\n');
        try {
            const response = disciplineRepository.getAll();
            console.log(response);
        }
        catch (error) {
            console.log('Error when retrieving all disciplines: ', error.message);
        }
    }
    static getDisciplineById(_id) {
        try {
            const response = disciplineRepository.findById({ _id });
            return response;
        }
        catch (error) {
            console.log('Error when retrieving discipline: ', error.message);
            return undefined;
        }
    }
    static findDiscipline() {
        console.log('\n--------------------------- Find Disciplines ---------------------------\n');
        try {
            const _id = Number(prompt('Enter the ID discipline: '));
            validator_1.default.idIsValid(_id);
            const response = disciplineRepository.findById({ _id });
            console.log(response);
        }
        catch (error) {
            console.log('Error when finding discipline: ', error.message);
        }
    }
    static updateDiscipline() {
        console.log('\n--------------------------- Update Disciplines ---------------------------\n');
        const _id = Number(prompt('Enter the ID discipline: '));
        const _name = prompt('Enter the new discipline name: ');
        const _description = prompt('Enter the new discipline description: ');
        this.getAllDisciplines();
        const _workload = Number(prompt('Enter the new discipline workload: '));
        try {
            validator_1.default.validateDiscipline({
                _id,
                _name,
                _description,
                _workload,
            });
            const response = disciplineRepository.updateById({
                _id,
                _name,
                _description,
                _workload,
            });
            console.log('\nDiscipline successfully updated!');
            console.log(response);
        }
        catch (error) {
            console.log('Error when updating discipline: ', error.message);
        }
    }
    static deleteDiscipline() {
        console.log('\n--------------------------- Delete Disciplines ---------------------------\n');
        this.getAllDisciplines();
        const _id = Number(prompt('Enter the ID discipline: '));
        try {
            validator_1.default.idIsValid(_id);
            const response = disciplineRepository.deleteById({ _id });
            console.log('\nDiscipline successfully deleted!');
            console.log(response);
        }
        catch (error) {
            console.log('Error when deleting discipline: ', error.message);
        }
    }
}
exports.default = DisciplineController;
//# sourceMappingURL=DisciplineController.js.map
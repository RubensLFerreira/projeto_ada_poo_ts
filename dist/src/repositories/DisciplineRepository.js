"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DisciplineRepository {
    constructor() {
        this.disciplines = [];
    }
    register(newDiscipline) {
        const disciplineExists = this.disciplines.find((discipline) => discipline._name === newDiscipline._name);
        if (disciplineExists) {
            console.log('\nThere is already a discipline with this name');
            return;
        }
        this.disciplines.push(newDiscipline);
        return newDiscipline;
    }
    getAll() {
        const arr = [];
        if (this.disciplines.length === 0) {
            console.log('Not found disciplines!');
            return;
        }
        this.disciplines.forEach((item) => arr.push(item));
        return arr;
    }
    findById(id) {
        const foundDiscipline = this.disciplines.find((discipline) => discipline._id === id._id);
        if (!foundDiscipline) {
            console.log('Discipline not found!');
            return;
        }
        return foundDiscipline;
    }
    updateById(updatedDiscipline) {
        const index = this.disciplines.findIndex((discipline) => discipline._id === updatedDiscipline._id);
        if (index === -1) {
            console.log('Discipline not found!');
            return;
        }
        this.disciplines[index] = { ...updatedDiscipline };
        return updatedDiscipline;
    }
    deleteById(id) {
        const index = this.disciplines.findIndex((discipline) => discipline._id === id._id);
        if (index === -1) {
            console.log('Discipline not found!');
            return;
        }
        const deletedDiscipline = this.disciplines.splice(index, 1);
        return deletedDiscipline;
    }
}
exports.default = DisciplineRepository;
//# sourceMappingURL=DisciplineRepository.js.map
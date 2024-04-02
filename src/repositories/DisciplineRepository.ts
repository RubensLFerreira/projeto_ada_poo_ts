import { IDiscipline } from '../interfaces/discipline/IDiscipline';
import { IDisciplineRepository } from '../interfaces/discipline/IDisciplineRepository';

export default class DisciplineRepository implements IDisciplineRepository {
  disciplines: Array<IDiscipline>;
  constructor() {
    this.disciplines = [];
  }

  register(newDiscipline: IDiscipline): IDiscipline | undefined {
    const disciplineExists = this.disciplines.find((discipline) => discipline._name === newDiscipline._name);

    if (disciplineExists) {
      console.log('\nThere is already a discipline with this name');
      return;
    }

    this.disciplines.push(newDiscipline);
    return newDiscipline;
  }

  getAll(): IDiscipline[] | undefined {
    const arr: IDiscipline[] = [];

    if (this.disciplines.length === 0) {
      console.log('Not found disciplines!');
      return;
    }

    this.disciplines.forEach((item) => arr.push(item));
    return arr;
  }

  findById(id: Pick<IDiscipline, '_id'>): IDiscipline | undefined {
    const foundDiscipline = this.disciplines.find((discipline) => discipline._id === id._id);

    if (!foundDiscipline) {
      console.log('Discipline not found!');
      return;
    }

    return foundDiscipline;
  }

  updateById(updatedDiscipline: IDiscipline): IDiscipline | undefined {
    const index = this.disciplines.findIndex((discipline) => discipline._id === updatedDiscipline._id);

    if (index === -1) {
      console.log('Discipline not found!');
      return;
    }

    this.disciplines[index] = { ...updatedDiscipline };
    return updatedDiscipline;
  }

  deleteById(id: Pick<IDiscipline, '_id'>): IDiscipline[] | undefined {
    const index = this.disciplines.findIndex((discipline) => discipline._id === id._id);

    if (index === -1) {
      console.log('Discipline not found!');
      return;
    }

    const deletedDiscipline = this.disciplines.splice(index, 1);
    return deletedDiscipline;
  }
}

import PromptSync from 'prompt-sync';

import DisciplineRepository from '../repositories/DisciplineRepository';
import Generator from '../utils/Generator';

import { IDiscipline } from '../interfaces/discipline/IDiscipline';
import Validator from '../utils/errors/validator';

const prompt = PromptSync();
const disciplineRepository: DisciplineRepository = new DisciplineRepository();

export default class DisciplineController {
  registerDiscipline(): IDiscipline | undefined {
    console.log('\n--------------------------- Register Discipline ---------------------------\n');

    const _id = Generator.generateId();
    const _name = prompt('Enter the name of the Discipline: ');
    const _description = prompt('Enter the description of the Discipline: ');
    const _workload = Number(prompt('Enter the workload of the Discipline: '));

    try {
      Validator.validateDiscipline({
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
      return response;
    } catch (error: any) {
      console.log('Error when registering a new discipline: ', error.message);
      return error.message;
    }
  }

  static getAllDisciplines(): void {
    console.log('\n--------------------------- All Disciplines ---------------------------\n');

    try {
      const response = disciplineRepository.getAll();
      console.log(response);
    } catch (error: any) {
      console.log('Error when retrieving all disciplines: ', error.message);
    }
  }

  static getDisciplineById(_id: number): IDiscipline | undefined {
    try {
      const response = disciplineRepository.findById({ _id });
      return response;
    } catch (error: any) {
      console.log('Error when retrieving discipline: ', error.message);
      return undefined;
    }
  }

  static findDiscipline(): void {
    console.log('\n--------------------------- Find Disciplines ---------------------------\n');

    try {
      const _id = Number(prompt('Enter the ID discipline: '));

      Validator.idIsValid(_id);

      const response = disciplineRepository.findById({ _id });
      console.log(response);
    } catch (error: any) {
      console.log('Error when finding discipline: ', error.message);
    }
  }

  static updateDiscipline(): void {
    console.log('\n--------------------------- Update Disciplines ---------------------------\n');

    const _id = Number(prompt('Enter the ID discipline: '));
    const _name = prompt('Enter the new discipline name: ');
    const _description = prompt('Enter the new discipline description: ');

    this.getAllDisciplines();

    const _workload = Number(prompt('Enter the new discipline workload: '));

    try {
      Validator.validateDiscipline({
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
    } catch (error: any) {
      console.log('Error when updating discipline: ', error.message);
    }
  }

  static deleteDiscipline(): void {
    console.log('\n--------------------------- Delete Disciplines ---------------------------\n');

    this.getAllDisciplines();
    const _id = Number(prompt('Enter the ID discipline: '));

    try {
      Validator.idIsValid(_id);

      const response = disciplineRepository.deleteById({ _id });

      console.log('\nDiscipline successfully deleted!');
      console.log(response);
    } catch (error: any) {
      console.log('Error when deleting discipline: ', error.message);
    }
  }
}

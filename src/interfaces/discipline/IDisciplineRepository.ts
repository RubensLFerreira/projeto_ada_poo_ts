import { IDiscipline } from './IDiscipline';

export interface IDisciplineRepository {
  disciplines: Array<IDiscipline>;
  register(discipline: IDiscipline): IDiscipline | undefined;
  getAll(): IDiscipline[] | undefined;
  findById(discipline: IDiscipline): IDiscipline | undefined;
  updateById(discipline: IDiscipline): IDiscipline | undefined;
  deleteById(discipline: IDiscipline): IDiscipline[] | undefined;
}

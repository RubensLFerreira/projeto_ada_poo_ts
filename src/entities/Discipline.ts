import { IDiscipline } from '../interfaces/discipline/IDiscipline';

export default class Discipline implements IDiscipline {
  _id: number;
  _name: string;
  _description: string;
  _workload: number;

  constructor(id: number, name: string, description: string, workload: number) {
    this._id = id,
    this._name = name,
    this._description = description;
    this._workload = workload;
  }
}
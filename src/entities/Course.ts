import { ICourse } from '../interfaces/course/ICourse';

export default class Course implements ICourse {
  _id: number;
  _name: string;
  _institution: string;
  _duration: number;
  _disciplines: number[];

  constructor(
    id: number,
    name: string,
    institution: string,
    duration: number,
    disciplines: number[],
  ) {
    this._id = id;
    this._name = name;
    this._institution = institution;
    this._duration = duration;
    this._disciplines = disciplines;
  }
}

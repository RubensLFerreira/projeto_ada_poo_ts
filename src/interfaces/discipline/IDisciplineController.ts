import { IDiscipline } from './IDiscipline';

export interface IDisciplineController {
  registerDiscipline(): IDiscipline | undefined;
}
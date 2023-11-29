import { IDisciplina } from "../interfaces/disciplina/IDisciplina";
import { IListaDisciplina } from "../interfaces/disciplina/IListaDisciplina";

export default class DisciplinaRepository implements IListaDisciplina {
  disciplinas: Array<IDisciplina> | undefined;

  constructor() {
    this.disciplinas = [];
  }

  cadastrar(disciplina: IDisciplina): IDisciplina {
    this.disciplinas?.push(disciplina);
    return disciplina;
  }

  listar(): void {
    console.log('\n--------------------------- Lista de Disciplina ---------------------------');

    this.disciplinas?.forEach((disciplina) => {
      console.log(`| ID: ${disciplina._id} | Nome: ${disciplina._nome} | Nota: ${disciplina._nota} | Carga Horária: ${disciplina._cargaHoraria} |`);
    });

    console.log('--------------------------------------------------------------------------\n');
  }

  consultar(id: number): IDisciplina | undefined {
    const disciplina = this.disciplinas?.find((disciplina) => disciplina._id === id);

    if (!disciplina) {
      console.log('Disciplina não encontrada!');
      return;
    }

    console.log(`\n---------------- Disciplina id: ${id} ----------------`);
    console.log(`| Nome: ${disciplina._nome} | Nota: ${disciplina._nota} | Carga Horária: ${disciplina._cargaHoraria} |`);
    console.log(`-----------------------------------------------------------------`);
    return disciplina;
  }

  remover(id: number): void {
    const disciplina = this.disciplinas?.find((disciplina) => disciplina._id === id);

    if (!disciplina) {
      console.log('\nDisciplina não encontrada!');
      return;
    }

    const index = this.disciplinas?.indexOf(disciplina);
    this.disciplinas?.splice(index!, 1);
    console.log('\nDisciplina removida com sucesso!');
  }
}
import { IDisciplina } from './../interfaces/disciplina/IDisciplina';
import { IListaDisciplina } from './../interfaces/disciplina/IListaDisciplina';

export default class DisciplinaRepository implements IListaDisciplina {
  disciplinas: Array<IDisciplina> | undefined;

  constructor() {
    this.disciplinas = [];
  }

  cadastrar(disciplina: IDisciplina): IDisciplina | undefined {
    try {
      this.disciplinas?.push(disciplina);
      return disciplina;
    } catch (error) {
      console.error(error);
      return;
    }
  }

  listar(): void {
    console.log('\n--------------------------- Lista de Disciplina ---------------------------');

    try {
      this.disciplinas?.forEach((disciplina) => {
        console.log(`| ID: ${disciplina._id} | Nome: ${disciplina._nome} | Descrição: ${disciplina._descricao} | Carga horária: ${disciplina._cargaHoraria} |`);
      });
    } catch (error) {
      throw new Error('Erro ao listar disciplinas!');
    }

    console.log('---------------------------------------------------------------------------\n');
  }

  consultar(id: number): IDisciplina | undefined {
    const disciplina = this.disciplinas?.find(disciplina => disciplina._id === id);

    if (!disciplina) {
      console.log('\nDisciplina não encontrada!');
      return;
    }

    console.log(`\n---------------- Disciplina id: ${id} ----------------`);
    console.log(`| Nome: ${disciplina._nome} | Nota: ${disciplina._descricao} | Carga Horária: ${disciplina._cargaHoraria} |`);
    console.log('-----------------------------------------------------------------');
    return disciplina;
  }

  consultarNome(id: number): IDisciplina | undefined {
    const disciplina = this.disciplinas?.find(disciplina => disciplina._id === id);

    if (!disciplina) {
      console.log('\nDisciplina não encontrada!');
      return;
    }

    console.log(`Disciplina: ${disciplina._nome} | Descrição: ${disciplina._descricao}`);
    return disciplina;
  }

  remover(id: number): IDisciplina | void {
    const disciplina = this.disciplinas?.find((disciplina) => disciplina._id === id);

    if (!disciplina) {
      console.log('\nDisciplina não encontrada');
      return;
    }

    const index = this.disciplinas?.indexOf(disciplina);
    this.disciplinas?.splice(index!, 1);
    console.log(`\nDisciplina ${disciplina._nome} removida com sucesso!`);
  }
}
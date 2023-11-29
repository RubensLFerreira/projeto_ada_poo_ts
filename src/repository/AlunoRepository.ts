import { IAluno } from "../interfaces/aluno/IAluno";
import { IListaAluno } from "../interfaces/aluno/IListaAluno";

export default class AlunoRepository implements IListaAluno {
  alunos: IAluno[] | undefined;

  constructor() {
    this.alunos = [];
  }

  cadastrar(aluno: IAluno): IAluno  {
    this.alunos?.push(aluno);
    return aluno;
  }

  listar(): void {
    console.log('\n--------------------------- Lista de Alunos ---------------------------');

    this.alunos?.forEach((aluno) => {
      console.log(`| ID: ${aluno._id} | Nome: ${aluno._nome} | Idade: ${aluno._idade} | Matrícula: ${aluno._matricula} | Curso: ${aluno._curso} |`);
    });

    console.log('-----------------------------------------------------------------------');
  }

  consultar(id: number): IAluno | undefined {
    const aluno = this.alunos?.find((aluno) => aluno._id === id);

    if (!aluno) {
      console.log('Aluno não encontrado!');
      return;
    }

    console.log(`\n------------- Aluno id: ${id} -------------`);
    console.log(`| Nome: ${aluno._nome} | Idade: ${aluno._idade} | Matrícula: ${aluno._matricula} | Curso: ${aluno._curso} |`);
    console.log(`--------------------------------------------`);
    return aluno;
  }

  remover(id: number): void {
    const aluno = this.alunos?.find((aluno) => aluno._id === id);

    if (!aluno) {
      console.log('\nAluno não encontrado!');
      return;
    }

    const index = this.alunos?.indexOf(aluno);
    this.alunos?.splice(index!, 1);
    console.log('\nAluno removido com sucesso!');
  }
}
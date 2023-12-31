import { IAluno } from '../interfaces/aluno/IAluno';
import { IListaAluno } from '../interfaces/aluno/IListaAluno';

export default class AlunoRepository implements IListaAluno {
  alunos: Array<IAluno> | undefined;

  constructor() {
    this.alunos = [];
  }

  cadastrar(aluno: IAluno): IAluno | undefined {
    try {
      this.alunos?.push(aluno);
      return aluno;
    } catch (error) {
      console.error('\nErro ao cadastrar Aluno!');
    }
  }

  listar(): void {
    console.log('\n--------------------------- Lista de Alunos ---------------------------');

    this.alunos?.forEach(aluno => console.log(`
    | ID: ${aluno._id}
    | Nome: ${aluno._nome}
    | Matricula: ${aluno._matricula}
    | Idade: ${aluno._idade}
    | Curso: ${aluno._curso}`));

    console.log('-----------------------------------------------------------------------\n');
  }

  listarId(): void {
    console.log('\n--------------------------- Lista de Alunos ---------------------------');

    this.alunos?.forEach(aluno => console.log(`| ID: ${aluno._id} | Nome: ${aluno._nome}`));

    console.log('-----------------------------------------------------------------------\n');
  }

  consultar(id: number): IAluno | undefined {
    const AlunoEncontrado = this.alunos?.find(aluno => aluno._id === id);

    if (!AlunoEncontrado) {
      console.log('\nAluno não encontrado!');
      return;
    }

    console.log('\n--------------------------- Descrição do aluno ---------------------------');
    console.log(`
    | ID: ${AlunoEncontrado._id}
    | Nome: ${AlunoEncontrado._nome}
    | Matricula: ${AlunoEncontrado._matricula}
    | Idade: ${AlunoEncontrado._idade}
    | Curso: ${AlunoEncontrado._curso}
    `);
    console.log('\n--------------------------------------------------------------------------');
  }

  remover(id: number): void | undefined {
    const AlunoEncontrado = this.alunos?.find(aluno => aluno._id === id);

    if (!AlunoEncontrado) {
      console.log('\nAluno não encontrado!');
      return;
    }

    this.alunos?.splice(this.alunos.indexOf(AlunoEncontrado), 1);
    console.log('\nAluno removido com sucesso!');
  }
}
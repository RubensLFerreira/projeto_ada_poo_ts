import { ListaAlunosProps } from "../interfaces/ListaAlunos";
import { AlunosProps } from "../interfaces/Alunos";

export class ListaAlunos implements ListaAlunosProps {
    private _alunos: Array<AlunosProps> | undefined

    get alunos(): Array<AlunosProps> | undefined {
        return this._alunos
    }

    addAlunos(alunos: AlunosProps) {
        if(this._alunos) {
            return this._alunos.push(alunos) 
        }

        this._alunos = [alunos] //Não precisa do else, pq se ele executar o if vai ter o return, o qual vai jogar ele pra fora da função
    }

    removeAlunos(id: number) {
        if(this._alunos) {
            this._alunos = this._alunos.filter(value => value.id !== id)
            //Vai filtrar tudo que for diferente dele
            return
        }

        console.log('Lista Vazia')
        return
    }

    getAlunos(id: number) {
        if(this._alunos) {
            return this._alunos.find(value => value.id === id)
        }

        console.log('Lista Vazia')
        return
    }
}
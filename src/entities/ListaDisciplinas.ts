import { ListaDisciplinasProps } from "../interfaces/ListaDisciplinas";
import { DisciplinasProps } from "../interfaces/Disciplinas";

export class ListaDisciplinas implements ListaDisciplinasProps {
    private _disciplinas: Array<DisciplinasProps> | undefined

    get disciplinas(): Array<DisciplinasProps> | undefined {
        return this._disciplinas
    }

    addDisciplinas(disciplinas: DisciplinasProps) {
        if(this._disciplinas) {
            return this._disciplinas.push(disciplinas) 
        }

        this._disciplinas = [disciplinas] //Não precisa do else, pq se ele executar o if vai ter o return, o qual vai jogar ele pra fora da função
    }

    removeDisciplinas(id: number) {
        if(this._disciplinas) {
            this._disciplinas = this._disciplinas.filter(value => value.id !== id)
            //Vai filtrar tudo que for diferente dele
            return
        }

        console.log('Lista Vazia')
        return
    }

    getDisciplinas(id: number) {
        if(this._disciplinas) {
            return this._disciplinas.find(value => value.id === id)
        }

        console.log('Lista Vazia')
        return
    }
}
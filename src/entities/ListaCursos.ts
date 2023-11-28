import { ListaCursosProps } from "../interfaces/ListaCursos";
import { CursosProps } from "../interfaces/Cursos";

export class ListaCursos implements ListaCursosProps {
    private _cursos: Array<CursosProps> | undefined

    get cursos(): Array<CursosProps> | undefined {
        return this._cursos
    }

    addCursos(cursos: CursosProps) {
        if(this._cursos) {
            return this._cursos.push(cursos) 
        }

        this._cursos = [cursos] //Não precisa do else, pq se ele executar o if vai ter o return, o qual vai jogar ele pra fora da função
    }

    removeCursos(id: number) {
        if(this._cursos) {
            this._cursos = this._cursos.filter(value => value.id !== id)
            //Vai filtrar tudo que for diferente dele
            return
        }

        console.log('Lista Vazia')
        return
    }

    getCursos(id: number) {
        if(this._cursos) {
            return this._cursos.find(value => value.id === id)
        }

        console.log('Lista Vazia')
        return
    }
}
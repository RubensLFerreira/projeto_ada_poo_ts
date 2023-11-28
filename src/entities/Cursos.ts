import { CursosProps } from "../interfaces/Cursos"; //Modularização(importando)


export class Cursos implements CursosProps{ //Implementando a interface através de uma classe
    private static countCursos = 1 /*Definindo os atributos da nossa classe */
    private _id: number
    private _nomeDoCurso: string
    private _turno: string
    private _disciplinas: Array<string>
    
    constructor(nomeDoCurso: string, turno: string, disciplinas: Array<string>) { //Definindo o construtor, o que vai chegar como parâmetro para o construtor, qual o formato desse parâmetros e os tipos dos seus atributos e atribuindo tudo aquilo que vai receber no momento da instância da classe(Lembrando que a função construtora é executada no momento que a classe é instanciada)
        this._id = Cursos.countCursos
        this._nomeDoCurso = nomeDoCurso
        this._turno = turno
        this._disciplinas = disciplinas
        Cursos.countCursos++
    }

    get id(): number {
        return this._id
    }
    
    get nomeDoCurso(): string {
        return this._nomeDoCurso
    }

    get turno(): string {
        return this._turno
    }

    get disciplinas(): Array<string> {
        return this._disciplinas
    }

    show() {
        console.log()
    }
}
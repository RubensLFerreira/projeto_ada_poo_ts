import { AlunosProps } from "../interfaces/Alunos"; //Modularização(importando)


export class Alunos implements AlunosProps{ //Implementando a interface através de uma classe
    private static countAlunos = 1 /*Definindo os atributos da nossa classe */
    private _id: number
    private _nome: string
    private _ano: number
    private _cursos: string
    private _disciplinas: Array<string>
    
    constructor(nome: string, ano: number, cursos: string, disciplinas: Array<string>) { //Definindo o construtor, o que vai chegar como parâmetro para o construtor, qual o formato desse parâmetros e os tipos dos seus atributos e atribuindo tudo aquilo que vai receber no momento da instância da classe(Lembrando que a função construtora é executada no momento que a classe é instanciada)
        this._id = Alunos.countAlunos
        this._nome = nome
        this._ano = ano
        this._cursos = cursos
        this._disciplinas = disciplinas
        Alunos.countAlunos++
    }

    get id(): number {
        return this._id
    }
    
    get nome(): string {
        return this._nome
    }

    get ano(): number {
        return this._ano
    }

    get cursos(): string {
        return this._cursos
    }

    get disciplinas(): Array<string> | undefined {
        return this._disciplinas
    }

    show() {
        console.log()
    }
}
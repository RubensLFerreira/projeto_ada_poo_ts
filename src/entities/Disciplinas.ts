import { DisciplinasProps } from "../interfaces/Disciplinas"; //Modularização(importando)


export class Disciplinas implements DisciplinasProps{ //Implementando a interface através de uma classe
    private static countDisciplinas = 1 /*Definindo os atributos da nossa classe */
    private _id: number
    private _nome: string
    private _cargaHoraria: string
    private _descricao: string
    
    constructor(nome: string, cargaHoraria: string, descricao: string) { //Definindo o construtor, o que vai chegar como parâmetro para o construtor, qual o formato desse parâmetros e os tipos dos seus atributos e atribuindo tudo aquilo que vai receber no momento da instância da classe(Lembrando que a função construtora é executada no momento que a classe é instanciada)
        this._id = Disciplinas.countDisciplinas
        this._nome = nome
        this._cargaHoraria = cargaHoraria
        this._descricao = descricao
        Disciplinas.countDisciplinas++
    }


    public atualizarDados(nome: string, cargaHoraria: string, descricao: string): void {
        this._nome = nome;
        this._cargaHoraria = cargaHoraria;
        this._descricao = descricao;
    }

    get id(): number {
        return this._id
    }
    
    get nome(): string {
        return this._nome
    }

    get cargaHoraria(): string {
        return this._cargaHoraria
    }

    get descricao(): string {
        return this._descricao
    }

    show() {
        console.log()
    }


}
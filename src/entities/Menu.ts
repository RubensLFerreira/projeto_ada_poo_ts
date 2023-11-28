import * as promptSync from 'prompt-sync'

import { Alunos } from './Alunos'
import { ListaAlunos } from './ListaAlunos'
import { ListaAlunosProps } from '../interfaces/ListaAlunos'

import { Disciplinas } from './Disciplinas'
import { ListaDisciplinas } from './ListaDisciplinas'
import { ListaDisciplinasProps } from '../interfaces/ListaDisciplinas'

import { Cursos } from './Cursos'
import { ListaCursos } from './ListaCursos'
import { ListaCursosProps } from '../interfaces/ListaCursos'

const prompt = promptSync()

export class MenuPrincipal {

    static opcoes() {
        console.log('\n============MENU============')
        console.log('* 1-Gerenciar ALUNOS       *')
        console.log('* 2-Gerenciar DISCIPLINAS  *')
        console.log('* 3-Gerenciar CURSOS       *')
        console.log('* 4-SAIR                   *')
        console.log('============================\n')

        return prompt('Escolha uma opção: ')
    }

    static iniciar() {

        while (true) {
            const opcao = MenuPrincipal.opcoes()
            switch (opcao) {
                case '1':
                    MenuAlunos.iniciar()
                    return
                case '2':
                    MenuDisciplinas.iniciar()
                    return
                case '3':
                    MenuCursos.iniciar()
                    return

                case '4':
                    return
            }
        }
    }
}


class MenuAlunos {

    static opcoes() {
        console.log('\n============MENU============')
        console.log('* 1-Cadastrar ALUNO        *')
        console.log('* 2-Consultar ALUNO        *')
        console.log('* 3-Remover ALUNO          *')
        console.log('* 4-Atualizar ALUNO        *')
        console.log('* 5-Retornar               *')
        console.log('============================\n')

        return prompt('Escolha uma opção: ')
    }

    static iniciar() {
        const listaAlunos = new ListaAlunos()

        while (true) {
            const opcao = MenuAlunos.opcoes()
            switch (opcao) {
                case '1':
                    //cadastrar alunos
                    const alunos = MenuAlunos.registro()
                    listaAlunos.addAlunos(alunos)
                    break;
                case '2':
                    //consultar alunos
                    MenuAlunos.listaAlunos(listaAlunos)
                    break;
                case '3':
                    //remover alunos
                    MenuAlunos.removeAlunos(listaAlunos)
                    break;
                case '4':
                    //atualizar alunos
                    break;
                case '5':
                    return MenuPrincipal.iniciar()
            }

            prompt('Pressione "Enter" para continuar...')
        }
    }
    static registro() {
        console.log('========= Cadastrar Aluno =========')
    
        const nome = String(prompt('Nome: '))
        const ano = Number(prompt('Idade: '))
        const cursos = String(prompt('Curso: '))
        const disciplinas = Array<string>(prompt('Disciplina: '))
    
        return new Alunos (nome, ano, cursos, disciplinas)
    }

    static listaAlunos(lista: ListaAlunosProps) {
        console.log('========= Lista de Alunos =========')

        if(lista.alunos) {
            lista.alunos.forEach((alunos) => {
                console.log(`ID: ${alunos.id}`)
                console.log(`       > Nome: ${alunos.nome}`)
                console.log(`       > Idade: ${alunos.ano}`)
                console.log(`       > Cursos: ${alunos.cursos}`)
                console.log(`       > Disciplinas: ${alunos.disciplinas}`)
            })
        }
    }

    static removeAlunos(lista: ListaAlunosProps) {
        console.log('========= Lista de Usuários =========')

        if(lista.alunos) {
            MenuAlunos.listaAlunos(lista)
            const id = prompt('Informe o id a ser removido: ')
            return lista.removeAlunos(Number(id))
        }

        console.log('Lista vazia')
    }
}


//////////////////////////////////////////////////////////
class MenuDisciplinas {

    static opcoes() {
        console.log('\n============MENU============')
        console.log('* 1-Cadastrar DISCIPLINA   *')
        console.log('* 2-Consultar DISCIPLINA   *')
        console.log('* 3-Remover DISCIPLINA     *')
        console.log('* 4-Atualizar DISCIPLINA   *')
        console.log('* 5-Retornar               *')
        console.log('============================\n')

        return prompt('Escolha uma opção: ')
    }

    static iniciar() {
        const listaDisciplinas = new ListaDisciplinas()

        while (true) {
            const opcao = MenuDisciplinas.opcoes()
            switch (opcao) {
                case '1':
                    //cadastrar disciplina
                    const disciplinas = MenuDisciplinas.registro()
                    listaDisciplinas.addDisciplinas(disciplinas)
                    break;
                case '2':
                    //consultar disciplina
                    MenuDisciplinas.listaDisciplinas(listaDisciplinas)
                    break;
                case '3':
                    //remover disciplina
                    MenuDisciplinas.removeDisciplinas(listaDisciplinas)
                    break;
                case '4':
                    //atualizar disciplina
                    break;
                case '5':
                    return MenuPrincipal.iniciar()
            }

            prompt('Pressione "Enter" para continuar...')
        }
    }

    static registro() {
        console.log('========= Cadastrar Disciplina =========')
    
        const nome = String(prompt('Nome: '))
        const cargaHoraria = String(prompt('Carga Horária: '))
        const nota = Number(prompt('Nota: '))
        
    
        return new Disciplinas (nome, cargaHoraria, nota)
    }

    static listaDisciplinas(lista: ListaDisciplinasProps) {
        console.log('========= Lista de Alunos =========')

        if(lista.disciplinas) {
            lista.disciplinas.forEach((disciplinas) => {
                console.log(`ID: ${disciplinas.id}`)
                console.log(`       > Nome: ${disciplinas.nome}`)
                console.log(`       > Idade: ${disciplinas.cargaHoraria}`)
                console.log(`       > Cursos: ${disciplinas.nota}`)
            })
        }
    }

    static removeDisciplinas(lista: ListaDisciplinasProps) {
        console.log('========= Lista de Disciplinas =========')

        if(lista.disciplinas) {
            MenuDisciplinas.listaDisciplinas(lista)
            const id = prompt('Informe o id a ser removido: ')
            return lista.removeDisciplinas(Number(id))
        }

        console.log('Lista vazia')
    }
}


//////////////////////////////////////////////////////////////
class MenuCursos {

    static opcoes() {
        console.log('\n============MENU============')
        console.log('* 1-Cadastrar CURSO        *')
        console.log('* 2-Consultar CURSO        *')
        console.log('* 3-Remover CURSO          *')
        console.log('* 4-Atualizar CURSO        *')
        console.log('* 5-Retornar               *')
        console.log('============================\n')

        return prompt('Escolha uma opção: ')
    }

    static iniciar() {
        const listaCursos = new ListaCursos()

        while (true) {
            const opcao = MenuCursos.opcoes()
            switch (opcao) {
                case '1':
                    //cadastrar CURSO
                    const cursos = MenuCursos.registro()
                    listaCursos.addCursos(cursos)
                    break;
                case '2':
                    //consultar CURSO
                    MenuCursos.listaCursos(listaCursos)
                    break;
                case '3':
                    //remover CURSO
                    MenuCursos.removeCursos(listaCursos)
                    break;
                case '4':
                    //atualizar CURSO
                    break;
                case '5':
                    return MenuPrincipal.iniciar()
            }

            prompt('Pressione "Enter" para continuar...')
        }
    }
    static registro() {
        console.log('========== Cadastrar Disciplina =========')
    
        const nomeDoCurso = String(prompt('Nome: '))
        const turno = String(prompt('Carga Horária: '))
        const disciplinas = Array<string>(prompt('Nota: '))
        
    
        return new Cursos (nomeDoCurso, turno, disciplinas)
    }

    static listaCursos(lista: ListaCursosProps) {
        console.log('========= Lista de Cursos =========')

        if(lista.cursos) {
            lista.cursos.forEach((cursos) => {
                console.log(`ID: ${cursos.id}`)
                console.log(`       > Nome: ${cursos.nomeDoCurso}`)
                console.log(`       > Turno: ${cursos.turno}`)
                console.log(`       > Disciplinas: ${cursos.disciplinas}`)
            })
        }
    }

    static removeCursos(lista: ListaCursosProps) {
        console.log('========= Lista de Cursos =========')

        if(lista.cursos) {
            MenuCursos.listaCursos(lista)
            const id = prompt('Informe o id a ser removido: ')
            return lista.removeCursos(Number(id))
        }

        console.log('Lista vazia')
    }
}
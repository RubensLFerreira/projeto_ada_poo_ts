import * as promptSync from 'prompt-sync'

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

        while (true) {
            const opcao = MenuAlunos.opcoes()
            switch (opcao) {
                case '1':
                    //cadastrar alunos
                    break;
                case '2':
                    //consultar alunos
                    break;
                case '3':
                    //remover alunos
                    break;
                case '4':
                    //atualizar alunos
                    break;
                case '5':
                    return MenuPrincipal.iniciar()
            }
        }
    }
}


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

        while (true) {
            const opcao = MenuDisciplinas.opcoes()
            switch (opcao) {
                case '1':
                    //cadastrar disciplina
                    break;
                case '2':
                    //consultar disciplina
                    break;
                case '3':
                    //remover disciplina
                    break;
                case '4':
                    //atualizar disciplina
                    break;
                case '5':
                    return MenuPrincipal.iniciar()
            }
        }
    }
}

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

        while (true) {
            const opcao = MenuCursos.opcoes()
            switch (opcao) {
                case '1':
                    //cadastrar CURSO
                    break;
                case '2':
                    //consultar CURSO
                    break;
                case '3':
                    //remover CURSO
                    break;
                case '4':
                    //atualizar CURSOd
                    break;
                case '5':
                    return MenuPrincipal.iniciar()
            }
        }
    }
}
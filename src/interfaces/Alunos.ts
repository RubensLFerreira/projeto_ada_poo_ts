export interface AlunosProps {
    id: number
    nome: string
    ano: number
    cursos: string
    disciplinas: Array<string> | undefined
    show: () => void
    atualizarDados(nome: string, ano: number, cursos: string, disciplinas: Array<string>): void;
}
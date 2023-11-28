export interface CursosProps {
    id: number
    nomeDoCurso: string
    turno: string
    disciplinas: Array<string>
    show: () => void
    atualizarDados(nomeDoCurso: string, turno: string, disciplinas: Array<string>): void;
}
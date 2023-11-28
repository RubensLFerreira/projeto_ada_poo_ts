export interface DisciplinasProps {
    id: number
    nome: string
    cargaHoraria: string
    descricao: string
    show: () => void
    atualizarDados(nome: string, cargaHoraria: string, descricao: string): void;
}
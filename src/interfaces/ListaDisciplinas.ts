import { DisciplinasProps } from "./Disciplinas";

export interface ListaDisciplinasProps {
    disciplinas: Array<DisciplinasProps> | undefined
    addDisciplinas: (disciplinas: DisciplinasProps) => void
    removeDisciplinas: (id: number) => void
    getDisciplinas: (id: number) => DisciplinasProps | undefined
}
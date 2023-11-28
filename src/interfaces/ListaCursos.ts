import { CursosProps } from "./Cursos";

export interface ListaCursosProps {
    cursos: Array<CursosProps> | undefined
    addCursos: (cursos: CursosProps) => void
    removeCursos: (id: number) => void
    getCursos: (id: number) => CursosProps | undefined
}
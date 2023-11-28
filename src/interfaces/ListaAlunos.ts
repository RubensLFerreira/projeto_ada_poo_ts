import { AlunosProps } from "./Alunos";

export interface ListaAlunosProps {
    alunos: Array<AlunosProps> | undefined
    addAlunos: (alunos: AlunosProps) => void
    removeAlunos: (id: number) => void
    getAlunos: (id: number) => AlunosProps | undefined
}
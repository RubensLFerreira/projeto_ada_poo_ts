export interface IDisciplina {
  _id: number;
  _nome: string;
  _descricao: string
  _cargaHoraria: number;
  atualizarDados(nome: string, descricao: string, cargaHoraria: number): void;
}
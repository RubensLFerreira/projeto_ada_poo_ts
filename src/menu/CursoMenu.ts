import * as PromptSync from 'prompt-sync';

const prompt = PromptSync();

export default class CursoMenu {
  static options() {
    console.log('\n*----- Gerênciamento de curso -----+');
    console.log('| 1 - Cadastrar curso              |');
    console.log('| 2 - Listar cursos                |');
    console.log('| 3 - Consultar curso por id       |');
    console.log('| 4 - Editar curso                 |');
    console.log('| 5 - Remover curso                |');
    console.log('| 6 - Voltar para menu             |');
    console.log('+----------------------------------+');

    return prompt('Selecione uma opção: ');
  }

  static init() {
    const value = true;

    while (value) {
      const option = CursoMenu.options();

    switch (option) {
      case '1':
        console.log('Em construção!');
        break;
      case '2':
        console.log('Em construção!');
        break;
      case '3':
        console.log('Em construção!');
        break;
      case '4':
        console.log('Em construção!');
        break;
      case '5':
        console.log('Em construção!');
        break;
      case '6':
        return;
    }
    }
  }
}
# ada_poo_ts_biblioteca

Projeto final do módulo 2 da ADA - `Sistema de Gerenciamento Escolar`

<div align="center"> 
<h2>
Visão Geral
</h2>
</div>
<div align="justify">
<p> Este projeto é um sistema de gerenciamento escolar desenvolvido em TypeScript, projetado para fornecer funcionalidades básicas de cadastro, consulta, remoção e atualização de alunos, disciplinas e cursos. O sistema utiliza uma abordagem orientada a objetos para modelar as entidades principais e suas relações. </p>

<div align="center"> 
<h2>
  Funcionalidades
</h2>
</div>
<h4>
  1. Gerenciar Alunos
</h4>

| Funcionalidades          | Descrição                       |
| :----------  | :------------------------------------------ |
|`Cadastrar Aluno:` | Permite cadastrar um novo aluno, incluindo informações como nome, idade e seleção de um curso existente.| 
|`Consultar Aluno:` | Possibilita a consulta de informações detalhadas sobre um aluno, incluindo seu nome, idade, curso associado e lista de disciplinas. |
|`Remover Aluno:`| Permite remover um aluno do sistema, excluindo todas as informações associadas a ele. |
|`Atualizar Aluno:`| Oferece a opção de atualizar informações de um aluno, como nome, idade e curso associado.|

<h4>
  2. Gerenciar Disciplinas
</h4>

| Funcionalidades          | Descrição                       |
| :----------  | :------------------------------------------ |
|`Cadastrar Disciplina:`| Permite o cadastro de uma nova disciplina, incluindo nome, carga horária e nota. A disciplina é associada a um curso existente.|
|`Consultar Disciplina:`| Permite a consulta de informações detalhadas sobre uma disciplina, incluindo nome, carga horária, nota e curso associado.|
|`Remover Disciplina:`| Permite remover uma disciplina do sistema, excluindo todas as informações associadas a ela.|
|`Atualizar Dsiciplina:`| Oferece a opção de atualizar informações de uma disciplina, como nome, carga horária e nota.|

<h4>
  3. Gerenciar Cursos
</h4>

| Funcionalidades          | Descrição                       |
| :----------  | :------------------------------------------ |
|`Cadastrar Curso:`| Permite o cadastro de um novo curso, incluindo nome e turno. Não é necessário associar disciplinas durante o cadastro.|
|`Consultar Curso:`| Permite a consulta de informações detalhadas sobre um curso, incluindo nome, turno e lista de disciplinas associadas.|
|`Remover Curso:`| Permite remover um curso do sistema, excluindo todas as informações associadas a ele, incluindo disciplinas e alunos.|
|`Atualizar Curso:`| Oferece a opção de atualizar informações de um curso, como nome e turno.|

<h4>
  4. Sair
</h4>
Encerra o programa.

<div align="center">
<h2>
  Estrutura do Projeto
</h2>
</div>
<div align="left">
  <p>
O projeto é organizado em classes que representam as principais entidades do sistema:
    
`Aluno:` Representa um aluno com nome, idade e associação a um curso.

`Disciplina:` Representa uma disciplina com nome, carga horária, nota e associação a um curso.

`Curso:` Representa um curso com nome, turno e uma lista de disciplinas associadas.

`Sistema:` Classe principal que gerencia as operações do sistema.
  </p>
</div>

<div align="center">
<h2>
  Como Utilizar? 
</h2>
</div>
<h4>
  1. Instalação
</h4>
🔻Clone o Repositório
<p>
  Abra o terminal e execute o seguinte comando para clonar o repositório para sua máquina local:
  
  `git clone https://github.com/RubensLFerreira/projeto_ada_poo_ts.git`

Este comando fará o download do código-fonte do sistema para um diretório local.
</p>
🔻Navegue no Diretório Local
<p>
  Acesse o diretório recém-clonado usando o comando:
  
  `cd projeto_ada_poo_ts`

  Certifique-se de estar dentro do diretório do projeto antes de prosseguir.
</p>

🔻Instale as Dependências do Projeto 
<p>
  Para garantir que todas as bibliotecas necessárias sejam instaladas, execute o seguinte comando:

  `npm install`
  
  Isso instalará as dependências listadas no arquivo `package.json` do projeto. Aguarde até que o processo de instalação seja concluído.
</p>

<h4>
  2. Execução
</h4>
🔻 Execute o Programa
<p>
  Após a conclusão da instalação das dependências, você pode iniciar o programa com o comando:

  `npm start`

  Isso iniciará o sistema e apresentará o menu principal no terminal.
</p>

#

🔻 Interaja com o Sistema 
<p>
  Siga as opções do menu e submenus exibidos no terminal para interagir com o sistema. Utilize as teclas numéricas correspondentes às opções desejadas e pressione "Enter" para confirmar a seleção. Por exemplo, para cadastrar um aluno, selecione a opção "Gerenciar Alunos" no menu principal e, em seguida, escolha a opção "Cadastrar Aluno" no submenu.

Continue interagindo com o sistema conforme suas necessidades. Ao finalizar, escolha a opção "Sair" para encerrar o programa.
</p>

<div align="center"> 
<h3> Contribuidores:</h3>
<table align="center">
  <tr align="center">
    <td>
      <a href="https://github.com/RubensLFerreira">
        <img src="https://avatars.githubusercontent.com/RubensLFerreira" width=100 />
        <p>Rubens <br/>Lima</p>
      </a>
    </td>
    <td>
      <a href="https://github.com/muriloma">
        <img src="https://avatars.githubusercontent.com/muriloma" width=100 />
        <p>Murilo</p>
      </a>
    </td>
    <td>
      <a href="https://github.com/Jamielly">
        <img src="https://avatars.githubusercontent.com/Jamielly" width=100 />
        <p>Jamielly <br/>Reis</p>
      </a>
    </td>
    <td>
      <a href="https://github.com/ailezigvilar">
        <img src="https://avatars.githubusercontent.com/ailezigvilar" width=100 />
        <p>ailezigvilar</p>
      </a>
    </td>
    <td>
      <a href="https://github.com/MatheusTerraAlves">
        <img src="https://avatars.githubusercontent.com/MatheusTerraAlves" width=100 />
        <p>Matheus <br/>Alves</p>
      </a>
    </td>
  </tr>
</table>
</div>

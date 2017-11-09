# Portal de Notícias - Curso Completo do Desenvolvedor NodeJS e MongoDB - Udemy
Meu primeiro projeto com NodeJS.

Este projeto foi implementado através do curso on-line "Curso Completo do Desenvolvedor NodeJS e MongoDB" da Udemy.

O projeto trata-se de um portal de notícias utilizando NodeJS com arquitetura MVC e banco de dados MySQL.

Para instalar o projeto, primeiramente faço o clone do repositório.

    git clone https://github.com/rsoliveira87/portal_noticias

No seu terminal, acesse a pasta do projeto.

    cd portal_noticias

Se já tiver o NodeJS instalado, execute o comando abaixo, se não tiver, clique [aqui](https://nodejs.org/en/) para baixar.

    npm install

O comando acima irá instalar os módulos padrões do Node e as dependências utilizadas no projeto.

Crie uma base de dados no MySQL com o nome "portal_noticias", depois crie uma tabela chamada "noticias" com os atributos "id_noticia", "titulo", "noticia", "autor", "data_noticia" e "data_criacao".

Abra o arquivo **dbConnection.js** dentro da pasta **config** e insira o usuário e senha do banco de dados.

Para executar o projeto, execute o comando abaixo no terminal.

    nodemon aula-11

Depois basta abrir o navegador e digitar **localhost:3000** na barra de endereços para a página inicial.
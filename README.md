# Teste CashForce
O teste proposto pela cashForce consiste em criar uma API, conectada ao banco de dados fornecido pela mesma. Após a criação da API, foi solicitado também criar uma tela desenhada no figma.


## Principais Stacks utilizadas:
```sh
 - Node.js.
 - Sequelize ORM.
 - Express.js.
 - React.
 - Styled-components.
```
## Habilidades Desenvolvidas:
- Configurar o Sequelize.
- Fazer junção nas tabelas utilizando o Sequelize.
- Uso do styled-components para fazer o CSS da aplicção.

## Primeiros passos:
#### Clone o repositório.
- Entre na pasta `desafioCashForce`.
- Entre na pasta front e digite o comando no terminal `npm install`.
- Apos o termino entre na pasta back e digite o mesmo comando `npm install`.

## Iniciando o back-End:
 - Você precisa colocar os dados das configurações da sua maquina no arquivo .env.
 ````
MYSQL_PASSWORD="sua_senha_aqui"
MYSQL_USER="seu_usuario_aqui"
MYSQL_HOST=localhost
MYSQL_PORT=3306
 ````
 ##### Certifique-se de ter inicializado o <strong>banco de dados</strong>
- Você deve digitar o comando `npm run db:reset`.Este comando vai  inicializar o sequelize,criar as tabelas e adicionar alguns dados pré definido.

- Agora você pode digitar `npm run dev` que a aplicação será iniciada.
#### A API vai ser iniciada na porta 3001.

## Iniciando o Front-End:

- Em outro terminal, entra na pasta Front.
- Digite o comando `npm start`
#### A aplicação vai iniciar na porta 3000.
---
<h2>Próximos passos:</h2>

### Para fins didáticos refazer o front usando Vue.js.
 
---

``Feedbacks são sempre bem vindos.``

<p align="center">
  <h1 align="center">API REST - RESTAURANTE (FUNCIONÁRIOS)</h1>
</p> 

# Sobre

API criada para o final do módulo 4 do curso da Resilia, referente ao cadastro de funcionários de um Restaurante.

##  Stacks

 - `Node.js` 
 - `Express`
 - `SQLite3`

 # Pré-requisitos:

### Instalando e executando a API:

Você precisará instalar em seu PC: <br>

[Git](https://git-scm.com) ✔ <br>
[Node.js](https://nodejs.org/en/) ✔ <br>
[Insomnia](https://insomnia.rest/download) ✔ <br>
[VSCode](https://code.visualstudio.com/) ✔ <br>

# Passo a Passo
## no terminal digite os comandos:

1 - git clone https://github.com/daniel2tavares/api-rest-restaurante.git<br>
2 - cd api-rest-restaurante<br>
3 - npm install: Para instalar as dependencias necessárias para rodar o projeto<br>
4 - npm start: Para iniciar o Projeto<br>

# Rotas da API

## Endereços

<b>[GET] </b> /restaurante/func - A rota exibirá todos os funcionários cadastrados<br>

________________________________________________________________________________________________________________

<b>[GET] </b> /restaurante/func/:ID - A rota exibirá os funcionários do ID especificado.<br>

________________________________________________________________________________________________________________

<b>[POST] </b> /restaurante/func/novoFunc - A rota criará um novo funcionário com base nas informações passadas no corpo da requisição.<br>

```javascript
{
   "NOME": "...",
   "MATRICULA": ...,
   "FUNCAO": ...   
}
```

<h4>Observações:</h4>
será gerado automaticamente um campo chamado ID no arquivo (database.db) para realização do CRUD.
________________________________________________________________________________________________________________

<b>[PUT] </b> /restaurante/func/editar/:ID - A rota atualizará o funcionário com as informações passadas no corpo da requisição<br>

<h4>Observações:</h4>
Você poderar alterar o campo que achar necessário no cliente.<br>
Para encontrar o id você pode realizar um GET anteriormente!

________________________________________________________________________________________________________________

<b>[DELETE] </b> /restaurante/func/delete/:ID - A rota deletará baseado em seu ID.<br>

<h4>Observações:</h4>
O ID se encontra no arquivo (database.db) ou será exibido quando efetuar um GET.

________________________________________________________________________________________________________________

# Conhecimentos Praticados

<p align="center" >
<img src="./readme/imgbin_sqlite-database-android-mysql-png.png" alt="Logo" width="200">
<img src="./readme/node-js.png" alt="Logo" width="100">
<img src="./readme/pngwing.com.png" alt="Logo" width="200">
<img src="./readme/insomnia-logo-A35E09EB19-seeklogo.com.png" alt="Logo" width="100">
</p>

<br>

<p align="center"><img src="./readme/giphy.gif" alt="hamburger-dance-Gif" width=""></p>

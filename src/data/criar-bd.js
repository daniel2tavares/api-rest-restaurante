const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/data/database.db');


const FUNC_SCHEMA = 
`CREATE TABLE IF NOT EXISTS "FUNC" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(255),
    "MATRICULA" varchar(255),
    "FUNCAO" varchar(255)
  );`;

  const ADD_FUNC_DATA = `
INSERT INTO FUNC (NOME, MATRICULA, FUNCAO)
VALUES 
('Daniel Torres Tavares','282', 'Dono'),
('Matilde Coelho de Lemos Tavares','295', 'Socia'),
('Maria Ione Coelho de Lemos Tavares','302', 'Cheff')
`
function criaTabelaFunc() {
  db.run(FUNC_SCHEMA, (error)=> {
     if (error) console.log("Erro ao criar tabela de FUNC", error);
  });
}

function populaTabelaFunc() {
  db.run(ADD_FUNC_DATA, (error)=> {
     if (error) console.log("Erro ao popular tabela de FUNC", error);
  });
}

function criarDb (){
  
  db.serialize( ()=> {
  criaTabelaFunc();
  populaTabelaFunc();
});
};

module.exports = criarDb;
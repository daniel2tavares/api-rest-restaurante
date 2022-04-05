const { response } = require("express")

module.exports = class funcDao {
    constructor(bd){
        this.bd = bd
    }

    VerFunc(){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM FUNC'
            this.bd.all(query, (error, response)=>{
                if(error) reject(`Erro ao acessar o bd. ${error}`)
                else resolve(response)
            })
        })
    }

    VerUmFunc(id){
        return new Promise((resolve, reject)=>{
            const query = 'SELECT * FROM FUNC WHERE ID = ? '
            this.bd.all(query, id, (error,response)=>{
                if(error) reject(`Erro ao encontrar o ID ${id}.  ${error}`)
                else resolve(response)
            })
        })
    }

    NovoFunc(infos){
        return new Promise((resolve, reject)=>{
            const query = 'INSERT INTO FUNC (NOME, MATRICULA, FUNCAO) VALUES (?, ?, ?)'
            const parametros = [infos[0], infos[1], infos[2],]
            this.bd.run(query, parametros, (error, response)=>{
                if(error) reject(`Erro ao adicionar FUNCIONARIO. ${error}`)
                else resolve('FUNCIONARIO adicionado com sucesso')
            })
        })
    }

    DelFunc(id){
        return new Promise((resolve, reject) =>{
            const query = 'DELETE FROM FUNC WHERE ID = (?)'
            this.bd.run(query, id, (error, response)=>{
                if(error) reject(`Erro ao excluir FUNCIONARIO. ${error}`) 
                else resolve("FUNCIONARIO excluido")
            })
        })
    }

    EditarFunc(infos, id){
        return new Promise((resolve,reject)=> {
            const query = 'UPDATE FUNC SET NOME = (?), MATRICULA = (?), FUNCAO = (?) WHERE ID = (?)'
            const parametros = [infos[0], infos[1], infos[2], id]
            this.bd .run(query, parametros, (error, response)=>{
                if(error) reject(`Erro ao editar FUNCIONARIO. ${error}`) 
                else resolve("FUNCIONARIO editado")
            })
        })
    }
        
}
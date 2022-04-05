const funcDao = require('../dao/func-dao.js')

module.exports = (app, bd) =>{
    const DaoFunc = new funcDao(bd)
    
    app.get('/restaurante/func', async (req,res) => {
         
        try{
            const ResVerFunc = await DaoFunc.VerFunc()
            res.send(ResVerFunc)

         }catch(error){
             res.send(error)
         }
    }) 

    app.get('/restaurante/func/:ID', async (req, resp)=>{
        try{

            const id = req.params.ID

            const ResVerUmFunc = await DaoFunc.VerUmFunc(id)
            resp.send(ResVerUmFunc)

        }catch(error){
            resp.send(error)
        }
    })

    app.post('/restaurante/func/novoFunc', async (req, res)=>{
        try{
            const body = req.body
            const infos = [body.NOME, body.MATRICULA, body.FUNCAO]
            const ResNovoFunc = await 
            DaoFunc.NovoFunc(infos)
            res.send(ResNovoFunc)
        }catch(error){
            res.send(error)
        }
    })

    app.delete('/restaurante/func/delete/:ID', async (req, res)=>{
        try{
            const id =req.params.ID
            const resDelFunc = await DaoFunc.DelFunc(id)
            res.send(resDelFunc)
        }catch(error){
            res.send(error)
        }
    })

    app.put('/restaurante/func/editar/:ID', async(req, res)=>{
        try{
            const id = req.params.ID
            const body = req.body
            const infos = [body.NOME, body.MATRICULA, body.FUNCAO]
            const resEditarFunc = await 
            DaoFunc.EditarFunc(infos, id)
            
            res.send(resEditarFunc)

        }catch(error){
            res.send(error)
        }
    })
}
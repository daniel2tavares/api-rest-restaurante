const request = require('supertest')

describe('Teste de rotas', ()=>{
    test('/restaurante/func', async ()=>{

    await request('http://localhost:3030')
    .get('/restaurante/func')
    .expect(200)
    .then((res)=> console.log('Testado com sucesso!'))
})

test('/restaurante/func/novoFunc', async ()=>{

    await request('http://localhost:3030')
    .get('/restaurante/func/novoFunc')
    .send(
        {
            "NOME": "Jonatas Torres Alves",
            "MATRICULA": "437",
            "FUNCAO": "Auxiliar do Cheff",
            
        }
    )
    .expect(200)
    .then((res)=> console.log('Testado com sucesso!'))
})


test('/restaurante/func/editar/3', async ()=>{

    await request('http://localhost:3030')
    .put('/academia/staff/edit/3')
    .send(
        {
            "NOME": "Jonatas Alves",
            "MATRICULA": "439",
            "FUNCAO": "Cheff de Cozinha",
        }
    )
    .expect(200)
    .then((res)=> console.log('Testado com sucesso!'))
})

test('/restaurante/func/delete/3', async ()=>{

    await request('http://localhost:3030')
    .delete('/restaurante/func/delete/3')
    .expect(200)
    .then((res)=> console.log('Testado com sucesso!'))
})
})





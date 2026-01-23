import { expect, test, beforeAll, afterAll, describe } from 'vitest'
import request from 'supertest'
import { server } from '../app.js'


describe('transactions rotes', () => {
    //Utilizando esse beforeAll para aguardar a utilização dos plugins já existentes 
    beforeAll(async () => {

        await server.ready()

    })

    //Após a execuçào dos testes esse metodo finaliza a aplicação 
    afterAll(async () => {

        await server.close()

    })

    test('O usuário consegue criar uma nova transação', async () => {

        //Fazer a chamada Http para criar nova transação p criar nova transação
        await request(server.server)
            .post('/transactions')
            .send({
                title: 'test transactions',
                amount: 12,
                type: 'debit'
            })
            .expect(201)

    })
})


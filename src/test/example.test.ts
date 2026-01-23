import { expect, test, beforeAll, afterAll, describe, beforeEach } from 'vitest'
import request from 'supertest'
import { server } from '../app.js'
import { string } from 'zod'
import { execSync } from 'node:child_process'

describe('transactions rotes', () => {
    //Utilizando esse beforeAll para aguardar a utilização dos plugins já existentes 
    beforeAll(async () => {

        await server.ready()

    })

    //Após a execuçào dos testes esse metodo finaliza a aplicação 
    afterAll(async () => {

        await server.close()

    })
    beforeEach(() => {
        execSync('npm run knex migrate:rollback --all')
        execSync('npm run knex migrate:latest')

    })

    test('criar nova transação', async () => {

        //Fazer a chamada Http para criar nova transação p criar nova transação
        const response = await request(server.server)
            .post('/transactions')
            .send({
                title: 'test transactions',
                amount: 12,
                type: 'debit'
            })
            .expect(201)


    })
    //Obs: Nunca se pode ter um teste que dependa de um outro teste

    test('Listando trasações', async () => {

        const createTransactionResponse = await request(server.server)
            .post('/transactions')
            .send({
                title: 'test transactions',
                amount: 12,
                type: 'credit'
            })

        const cookies = createTransactionResponse.get('Set-Cookie')

        if (!cookies) {
            throw new Error('Cookies não definidos')
        }

        //Realizando requisiçao para rota get 

        const listTransactionsResponse = await request(server.server)
            .get('/transactions')
            .set('Cookie', cookies)
            .expect(200)

        const transactionsID = listTransactionsResponse.body.transactions[0].id


        const getTransactionsResponse = await request(server.server)
            .get(`/transactions/${transactionsID}`)
            .set('Cookie', cookies)
            .expect(200)

        expect(listTransactionsResponse.body.transactions).toEqual([
            expect.objectContaining({
                title: 'test transactions',
                amount: 12,
            })
        ])
    })
})


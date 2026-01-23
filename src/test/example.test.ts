import {expect, test} from 'vitest'

test('O usuário consegue criar uma nova transação', ()=>{

    //Fazer a chamada Http para criar nova transação

    const responseStatus = 201

    expect(responseStatus).toEqual(201)



})
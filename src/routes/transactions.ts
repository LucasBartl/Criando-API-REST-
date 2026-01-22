import type { FastifyInstance } from 'fastify'
import {z} from 'zod'
import { db } from '../database.js'
import { randomUUID } from 'node:crypto'

//Cookies ->Formas de manter contexto entre as requisições


export async function transactionsRoutes(server:FastifyInstance) {

    server.post('/', async (req, res) => {
       //Queremos recuperar de body:{ title, amount, type: credit ou debit }
       const createTransationBodySchema = z.object({
        title: z.string(),
        amount: z.number(),
        type: z.enum(['credit' , 'debit'])
       })
       

       //valida se as informaçoes e recebe os atributos de createTransationBodySchema
       const {title, amount, type}  = createTransationBodySchema.parse(req.body)

       // Procurando dentro dos cookies da requisiçao um sessionID 
       let sessionID = req.cookies.sessionID 

       if(!sessionID){

        sessionID = randomUUID()

        res.cookie('sessionID', sessionID,{
            //Com o path definimos a rota que vai ter acesso aos cookies :
            path:'/',
            //Expiraçao dos cookies:
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
        })

       }

       await db('transactions').insert({
        id:randomUUID(),
        title,
        amount: type === 'credit' ? amount : amount * -1,
        session_id: sessionID
       })

       return res.status(201).send('Enviado')
    })

    server.get('/',async()=>{
        //Realiza a soma dos valores e com (as:'amount') muda o nome da coluna 
        const transactions = await db('transactions').select('*')
        return {transactions }
    })

    server.get('/summary',async()=>{
        //Realiza a soma dos valores e com (as:'amount') muda o nome da coluna 
        const summary = await db('transactions').sum('amount',{as: 'amount'})
        return {summary}
    })


}

//Request body: De onde vem os dados da transaçao 
import type { FastifyInstance } from 'fastify'
import {z} from 'zod'
import { db } from '../database.js'
import { randomUUID } from 'node:crypto'



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

       await db('transactions').insert({
        id:randomUUID(),
        title,
        amount: type === 'credit' ? amount : amount * -1
       })

       return res.status(201).send('Enviado')
    })
    server.get('/',async()=>{
         const transations = await db('transactions').select('*')
        return transations
    })


}

//Request body: De onde vem os dados da transaçao 
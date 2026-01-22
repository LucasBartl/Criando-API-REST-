import type { FastifyReply, FastifyRequest } from "fastify"

export async function checkSessionIdExist (req:FastifyRequest, res:FastifyReply) {

     const  sessionID = req.cookies.sessionID 

        if(!sessionID){
            return res.status(401).send({
                error:"Não autorizado"
            })

        }
}
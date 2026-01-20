// Importando knex
import knex from 'knex'
import type { Knex } from 'knex'

//Importando o dotenv
import 'dotenv/config'

if(!process.env.DATABASE_URL){
  throw new Error('DATABASE_URL env not found')
}



// const que vai
export const config: Knex.Config = {
  // Banco que iremos usar
  client: 'sqlite3',
  // Informaçoes sobre a conexão
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations:{
    extension:'ts',
    directory:'./database/migrations',
  }
}

export const db = knex(config)

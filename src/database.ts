// Importando knex
import knex from 'knex'
import type { Knex } from 'knex'

//Importando o dotenv
import { env } from './env/index.js'



// const que vai
export const config: Knex.Config = {
  // Banco que iremos usar
  client: 'sqlite3',
  // Informaçoes sobre a conexão
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations:{
    extension:'ts',
    directory:'./database/migrations',
  }
}

export const db = knex(config)

// Importando knex
import knex from 'knex'
import type { Knex } from 'knex'


// const que vai
export const config: Knex.Config = {
  // Banco que iremos usar
  client: 'sqlite3',
  // Informaçoes sobre a conexão
  connection: {
    filename: './database/app.db',
  },
  useNullAsDefault: true,
  migrations:{
    extension:'ts',
    directory:'./database/migrations',
  }
}

export const db = knex(config)

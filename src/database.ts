//Importando knex
import knex from 'knex';


//const que vai 
export const config =  {
    //Banco que iremos usar
    client:'sqlite3',
    //Informaçoes sobre a conexão
    connection: {
        filename: './tmp/app.db',
    },
    useNullAsDefault:true,
}

export const db = knex(config)
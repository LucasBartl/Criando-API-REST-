//Importando knex
import {knex as setupKnex} from 'knex';


//const que vai 
export const knex = setupKnex ({
    //Banco que iremos usar
    client:'sqlite3',
    //Informaçoes sobre a conexão
    connection: {
        filename: './tmp/app.db',
    }

})
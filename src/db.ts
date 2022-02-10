//Coneccion DB

import {createConnection} from 'typeorm';
import { Users } from './schema/entities/users';

export const connectDB = async () =>{
    await createConnection({
        type: 'mysql',
        username: 'pma',
        password:'password_1', 
        port: 3306,
        host: 'localhost',
        database: 'emailsdb',
        entities: [Users],
        synchronize: true,
        ssl: false
    })
}
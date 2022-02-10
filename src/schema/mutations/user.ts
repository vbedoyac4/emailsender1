import { GraphQLBoolean, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { Users } from "../entities/users";
import { UserType } from "../typeDefs/user";
import bcrypt from "bcryptjs"
import { resolve } from "path/posix";

export const CREATE_USER = {
    type: UserType,
    //Argumentos que puede recibir el procedimiento (campos de la tabla)
    args:{
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString}
    },
    //args:Valor de los argumentos ingresados al llamar el preocedimiento (nombre = "Faric")

    async resolve(_: any, args: any){
        //Constantes donde se guarda el valor recibido en args
        const{name, username, password} = args

    //Encriptar password antes de guardar
    const encryptPassword = await bcrypt.hash(password, 10);    


        //Insertar los datos recibidos en la tabla
        const result = await Users.insert({
        //Se ponen los datos que deseo mostrar en el return 
            name:name,
            username: username,
            password: encryptPassword

        })
        console.log(result)
        return {password:encryptPassword, username:username, id:result.identifiers[0].id}
    }
};

export const DELETE_USER = {
    type: GraphQLBoolean,
    args:{
        id: {type: GraphQLID}
    },
    async resolve(_:any, {id}:any){
        const result = await Users.delete(id);
        if(result.affected === 1) return true;
        return false;
    },
}

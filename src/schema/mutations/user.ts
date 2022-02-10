import { GraphQLString } from "graphql";
import { Users } from "../entities/users";
import { UserType } from "../typeDefs/user";

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

        //Insertar los datos recibidos en la tabla
        const result = await Users.insert({
            name:name,
            username: username,
            password: password
        })
        console.log(result)
        return {username, id:result.identifiers[0].id}
    }
}
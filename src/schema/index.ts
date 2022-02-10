import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { CREATE_USER, DELETE_USER } from "./mutations/user";
import { GREETINGS } from "./querys/greetings";
import { GET_ALL_USERS, GET_USER } from "./querys/users";

//Query: Select --- Mutate: Create, Update, Delete

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields:{
        greeting:GREETINGS,
        getAllUsers:GET_ALL_USERS,
        getUser: GET_USER
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER
    },
});

export const schema = new GraphQLSchema({
    query:RootQuery,
    mutation: Mutation,
})
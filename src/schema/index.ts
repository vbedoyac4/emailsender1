import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { CREATE_USER } from "./mutations/user";
import { GREETINGS } from "./querys/greetings";

//Query: Select --- Mutate: Create, Update, Delete

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields:{
        greeting:GREETINGS
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER
    },
});

export const schema = new GraphQLSchema({
    query:RootQuery,
    mutation: Mutation,
})
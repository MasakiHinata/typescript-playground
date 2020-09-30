import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { GraphQLObjectType, GraphQLSchema } from 'graphql'

const app: express.Express = express()

app.use("/graphql", graphqlHTTP({
    schema: new GraphQLSchema({}),
    graphiql: true
}))
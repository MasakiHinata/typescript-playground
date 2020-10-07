import { ApolloServer, gql } from 'apollo-server';
import { Book, Author, QueryResolvers, Resolvers, } from '../graphql/generated/graphql'

const authors = [
    { id: 1, name: 'J. K. Rowling' },
    { id: 2, name: 'J. R. R. Tolkien' },
    { id: 3, name: 'Brent Weeks' }
];

const books = [
    { id: 1, name: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
    { id: 2, name: 'Harry Potter and the Prisoner of Azkaban', authorId: 1 },
    { id: 3, name: 'Harry Potter and the Goblet of Fire', authorId: 1 },
    { id: 4, name: 'The Fellowship of the Ring', authorId: 2 },
    { id: 5, name: 'The Two Towers', authorId: 2 },
    { id: 6, name: 'The Return of the King', authorId: 2 },
    { id: 7, name: 'The Way of Shadows', authorId: 3 },
    { id: 8, name: 'Beyond the Shadows', authorId: 3 }
];

const Query: QueryResolvers = {
    books() {
        return books
    },
    authors() {
        return authors
    }
}

const resolvers: Resolvers = { Query, }
const typeDefs = gql`
    type Author {
    id: Int!,
    name: String!,
    books: [Book]
    }

    type Book {
    id: Int!,
    name: String!,
    authorId: Int!,
    author(authorId: Int!): Author
    }

    type Query {
    books: [Book],
    authors: [Author]
    }

`
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers as any
})

console.log("Hello World");

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
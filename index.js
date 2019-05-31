import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { resolvers, typeDefs } from './schema'

const app = express()
const port = process.env.PORT || 3500

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
})

server.applyMiddleware({ app })


app.get('/', (req, res) => res.send({ hello: 'there!' }))
app.listen(port, () => `Listening at port ${port}!`)
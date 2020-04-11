const express = require('express');
const graphqlHTTP = require('express-graphql')
app.use('/grapql', graphqlHTTP({
  graphiql: true
}))
const app = express()
app.listen(4000)
console.log('nasłuchuję...');

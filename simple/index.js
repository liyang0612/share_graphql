var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    name: String
    age: Int
    avatar_url: String
    type: String
  }
`);

var root = { 
  name: () => '哈哈哈哈',
  age: () => 20,
  avatar_url: () => 'http://www.test.com/pic.png',
  type: () => 'vip',
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
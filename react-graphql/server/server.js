import { 
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import express from 'express'
import bodyParser from 'body-parser';
import { schema } from './schema.js';

const PORT = 4000
const server = express();

server.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.listen(PORT, () => {
  console.log(`Graphql Server is now running on http://localstho:${PORT}`)
})
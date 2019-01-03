import express from 'express';
//GraphQL
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/',(req,res) => {
    res.send('Server Express Ready!');
});

//Resolver
let fechaPichanga = 'sin definir chicho!'
const root = {hola : () => "Hola Chicho!",proximaPichanga : () => fechaPichanga};

app.use('/chicho',graphqlHTTP({
    schema,
    rootValue:root,
    graphiql : true
}));

app.listen(8000,() => console.log('Servidor Ready!') );
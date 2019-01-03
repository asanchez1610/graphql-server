import {buildSchema} from 'graphql';

const schema = buildSchema(`
                type Query {
                    hola: String,
                    proximaPichanga: String
                }
`);

export default schema;
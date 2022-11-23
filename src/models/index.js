// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Author, Blog } = initSchema(schema);

export {
  Author,
  Blog
};
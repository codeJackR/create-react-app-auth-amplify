// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Influencer } = initSchema(schema);

export {
  Influencer
};
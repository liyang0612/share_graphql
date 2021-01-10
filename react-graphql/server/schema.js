import {
  makeExecutableSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers.js'

const typeDefs = `
type BizPlan {
  id: ID!
  bizName: String
}
type BudgetPlan {
  id: ID!
  budgetPlanName: String
  bizPlan: BizPlan
}
type Query {
   budgetPlan(page: Int, size: Int): [BudgetPlan]
}
`;

export const schema = makeExecutableSchema({ typeDefs, resolvers });
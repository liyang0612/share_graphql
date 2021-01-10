const budgetPlan = [{
  id: 1,
  budgetPlanName: '预算方案1',
  bizPlan: {
    id: 1-1,
    bizName: '业务方案1'
  }
}, {
  id: 2,
  budgetPlanName: '预算方案2',
  bizPlan: {
    id: 2-1,
    bizName: '业务方案2'
  }
}];

export const resolvers = {
  Query: {
    budgetPlan: (root, args) => {
      console.log(args)
      return budgetPlan;
    },
  },
};
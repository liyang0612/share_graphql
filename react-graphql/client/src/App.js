import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const channelsListQuery = gql`
  query BudgetPlan($page: Int, $size: Int) {
    budgetPlan(page: $page, size: $size) {
      id,
      budgetPlanName,
      bizPlan {
        id,
        bizName
      },
    }
  }
 `;

 const App = () => (
  <Query query={channelsListQuery} variables={{ page: 1, size: 2 }}>
    {({ loading, error, data = {} }) => {
      const { budgetPlan = [] } = data
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;
 
      return (
        <div>
          {
            budgetPlan.map(item => (<p key={item.id}>
              {
                item.budgetPlanName
              }
              ——————
              {
                item.bizPlan.bizName
              }
            </p>))
          }
        </div>
      )
    }}
  </Query>
)
 export default App;
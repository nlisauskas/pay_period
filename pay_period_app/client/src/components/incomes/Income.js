import React from 'react';

const Income = (props) => {
    function listIncomes() {

       return this.props.incomes.map((income, idx) => {
        return (
          <div key={idx}>
              <p>Description: {income.description}, Amount: {income.amount}</p>
            </div>
        )
      })
    }
    return (
      <div>
        {listIncomes()}
      </div>
    )
  }

   export default Income

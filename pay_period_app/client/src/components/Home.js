import React from 'react'
import IncomesContainer from './incomes/IncomesContainer'
import ExpensesContainer from './expenses/ExpensesContainer'
import StatusContainer from './status/StatusContainer'

class Home extends React.Component {
  render() {
    return (
      <div className="App">
      <StatusContainer />
      <IncomesContainer />
      <ExpensesContainer />
      </div>
    )
  }
}

export default Home

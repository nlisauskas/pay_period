import React, { Component } from 'react';
import { connect } from 'react-redux'
import Expense from './Expense';
import axios from 'axios';

class ExpensesContainer extends Component {

  constructor(props){
     super(props)
     axios.get('http://localhost:3001/api/v1/expenses.json')
     .then(response => {
         console.log(response)
         this.state = {
             expenses: response.data
         }
     })
     .catch(error => console.log(error))
 }

  renderExpenses = () => {
  return this.props.expenses.map(expense => <Expense delete={this.props.delete} key={expense.id} expense={expense} />)
}

  render() {
    return(
      <div>
        {this.renderExpenses()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    expenses: state.payPeriod.expenses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: expenseText => dispatch({type: 'DELETE_EXPENSE', payload: expenseText })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Status from './Status'
import SavingsTarget from './SavingsTarget'
import axios from 'axios';

class StatusContainer extends Component {

  render() {

    const lastPayDate = 'December 1, 2018';
    const savingTarget = this.props.savingsTarget
    const cashRemaining = this.props.totalIncome - this.props.totalExpense - savingTarget;
    const today = new Date();
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
    const fifteenth = new Date(today.getFullYear(), today.getMonth(), 15);
    function payDate() {
      if (today < fifteenth) {
        return fifteenth.toDateString();
      } else {
        return lastDayOfMonth.toDateString();
      }
    }

    return(
      <div>
        <SavingsTarget />
        <br></br>
        <Status payDate={payDate()} income={this.props.totalIncome} lastPayDate={lastPayDate} currentOutflows={this.props.totalExpense} cashRemaining={cashRemaining} savingTarget={this.props.savingsTarget} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.status,
    income: state.income,
    expense: state.expense
  }
}

export default connect(mapStateToProps)(StatusContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Income from './Income';
import NewIncomeForm from './NewIncomeForm';
import EditIncomeForm from './EditIncomeForm';
import {getIncomes} from '../../actions/index.js'
import { bindActionCreators } from 'redux';

class IncomesContainer extends Component {
  
  componentDidMount(){
   if (this.props.incomes.length === 0) {
     this.props.getIncomes()
   }
 }

  render() {
    return(
      <div className="income-container">
        <Income incomes={this.props.incomes} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {incomes: state.payPeriod.incomes}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getIncomes: getIncomes}, dispatch)
}

export default IncomesContainer = connect(mapStateToProps, mapDispatchToProps)(IncomesContainer);

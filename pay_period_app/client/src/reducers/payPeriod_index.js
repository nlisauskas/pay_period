export default function payPeriodReducer(state = {incomes: [], expenses: [], savingsTarget:0, totalIncome: 0, totalExpense: 0, loading: false}, action) {
  console.log(action);
  switch(action.type){

    case 'GET_INCOMES':

      return {loading: false, incomes: action.payload}

    case 'ADD_EXPENSE':

      const expense = {
        id: Math.random()*10000000000000000,
        expenseName: action.payload.expenseName,
        expenseAmount: action.payload.expenseAmount
      }
      console.log({ expenses: state.expenses.concat(action.payload.expenseName) });

      return { expenses: state.expenses.concat(expense), totalExpense: state.totalExpense += parseInt(expense.expenseAmount) };

      case 'DELETE_EXPENSE':

      let expenses = state.expenses.filter(expense => expense.id !== action.payload);

      let totalExpense = 0;

      for (var i = 0; i < expenses.length; i++) {
      totalExpense += expenses[i].expenseAmount
    }

      return {expenses: expenses,
        totalExpense: totalExpense };

        case 'SET_SAVINGS':

        let savingsTarget = parseInt(action.payload.savingsTarget);

        return { savingsTarget: state.savingsTarget = savingsTarget};

        case 'ADD_INCOME':

          const income = {
            id: Math.random()*10000000000000000,
            incomeSource: action.payload.incomeSource,
            incomeAmount: action.payload.incomeAmount
          }
          console.log({ incomes: state.incomes.concat(income) });

          return { incomes: state.incomes.concat(income), totalIncome: state.totalIncome += parseInt(income.incomeAmount)};

          case 'DELETE_INCOME':

          let incomes = state.incomes.filter(income => income.id !== action.payload);

          let totalIncome = 0;

          for (var i = 0; i < incomes.length; i++) {
          totalIncome += parseInt(incomes[i].incomeAmount)
        }

          return {incomes: incomes,
            totalIncome: totalIncome };

        case 'LOADING_INCOMES':

          return Object.assign({}, state, {loading: true});



    default: return state
  }
}

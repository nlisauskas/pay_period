export function getIncomes() {
  return (dispatch) => {
    dispatch({type: 'LOADING_INCOMES'});
    return fetch('http://localhost:3001/api/v1/incomes')
    .then(response => response.json())
    .then(responseJSON =>  {dispatch({ type: 'GET_INCOMES', responseJSON}) })
    .catch(error => console.log(error))
  }
}

//post
 export function addNewIncome(description, amount) {
     fetch( 'http://localhost:3001/api/v1/incomes', { income: {description, amount} })
     .then(response => {
         console.log(response)
         const incomes = [ ...this.state.incomes, response.data ]
         this.setState({incomes})
     })
     .catch(error => {
         console.log(error)
     })
 }

 //delete
export function removeIncome(id) {
      fetch( 'http://localhost:3001/api/v1/incomes/' + id )
      .then(response => {
          const incomes = this.state.incomes.filter(
              income => income.id !== id
          )
          this.setState({incomes})
      })
      .catch(error => console.log(error))
  }

export function editingIncome(id) {
     this.setState({
         editingIncomeId: id
     })
 }

 //put
 export function editIncome(id, description, amount) {
     fetch( 'http://localhost:3001/api/v1/incomes/' + id, {
         income: {
             description,
             amount
         }
     })
     .then(response => {
         console.log(response);
         const incomes = this.state.incomes;
         incomes[id-1] = {id, description, amount}
         this.setState(() => ({
             incomes,
             editingIncomeId: null
         }))
     })
     .catch(error => console.log(error));
 }

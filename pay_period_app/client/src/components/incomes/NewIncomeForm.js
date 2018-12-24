import React from 'react';

const NewIncomeForm = ({onNewIncome = f => f}) => {
    let description, amount
    const submit = e => {
        e.preventDefault()
        onNewIncome(description.value, amount.value)
        description.value = ''
        amount.value = ''
        description.focus()
    }

    return (
        <form onSubmit={submit}>
            <input  ref={input => description = input}
                    type="text"
                    placeholder="Income Source..." required />
            <input  ref={input => amount = input}
                    type="text"
                    placeholder="Income Amount..." required />
            <button>Add Income</button>
        </form>
    )
}


export default NewIncomeForm;

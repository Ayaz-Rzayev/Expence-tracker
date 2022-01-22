import './NewExpense.css'
import ExpenseForm from './EpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {
  const [state, setState] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    setState(prevState => !prevState)
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setState(prevState => !prevState)
  }
  const startEditingHandler = () => {
    setState(prevState => !prevState)
  }
  const stopEditingHandler = () => {
    setState(prevState => !prevState)
  }

  return (
    <div className='new-expense'>
      {!state && <button onClick={startEditingHandler}>Add New Expense</button>}
      {state && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  )
}

export default NewExpense
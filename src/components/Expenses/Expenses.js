import React, { useState } from 'react'
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter"

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2020')
  const filterChangeHandler = (enteredYear) => {
    setFilterYear(enteredYear)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filterYear} onChangeFilter={filterChangeHandler} />
      {props.expenses.map(expense => <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
      )}
    </Card>
  )
}

export default Expenses
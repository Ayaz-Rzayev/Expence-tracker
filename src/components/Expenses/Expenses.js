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
  const result = props.expenses.filter(expense => {
    return expense.date.getFullYear() === +filterYear
  })
  
  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filterYear} onChangeFilter={filterChangeHandler} />
      {result.map(expense => <ExpenseItem
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
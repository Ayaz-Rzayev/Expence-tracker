import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter"
import ExpensesChart from './ExpensesChart'
import ExpensesList from './ExpensesList'

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2020')
  const filterChangeHandler = (enteredYear) => {
    setFilterYear(enteredYear)
  }
  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear() === +filterYear
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filterYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  )
}

export default Expenses
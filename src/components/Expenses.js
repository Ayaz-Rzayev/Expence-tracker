import ExpenseItem from "./ExpenseItem"

function Expenses(props) {
  return (
    <div>
      {props.expenses.map(expense => <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      )}
    </div>
  )
}

export default Expenses
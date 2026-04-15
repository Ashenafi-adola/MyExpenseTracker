import Expenses from './comopnents/Expenses/Expenses'
import NewExpense from './comopnents/NewExpense/NewExpense'

function App() {
  const addExpenseHandler = (expense) => {
    console.log('inapp')
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses/>
    </div>
  )
}

export default App

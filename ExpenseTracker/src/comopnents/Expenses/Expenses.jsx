import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses() {
  return (
    <Card>
      <ExpenseItem title="Title" date={new Date()} amount="amount" />
      <ExpenseItem title="Title" date={new Date()} amount="amount" />
      <ExpenseItem title="Title" date={new Date()} amount="amount" />
      <ExpenseItem title="Title" date={new Date()} amount="amount" />
    </Card>
  );
}

export default Expenses;

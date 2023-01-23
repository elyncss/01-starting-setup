import React from "react";
import ExpensItem from "../../ExpensItem/ExpensItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  let expenseCondition = (
    <h2 className="expenses-list__fallback">No expense found</h2>
  );
  if (props.item.length > 0) {
    expenseCondition = props.item.map((expense) => (
      <ExpensItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <ul className="expenses-list">
      <li>{expenseCondition}</li>
    </ul>
  );
}

export default ExpensesList;

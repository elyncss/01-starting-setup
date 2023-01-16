import React, { useState } from "react";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensItem from "../ExpensItem/ExpensItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [setYear, setSetYear] = useState("2021");
  const saveYearData = (selectedYear) => {
    setSetYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={setYear} onChangeYear={saveYearData} />

        {props.title.map((expense) => (
          <ExpensItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;

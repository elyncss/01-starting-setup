import React, { useState } from "react";
import Card from "../Card/Card";
import ExpensesChart from "../Chart/ExpensesChart";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpenseFilter/ExpensesList/ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [setYear, setSetYear] = useState("2021");
  const saveYearData = (selectedYear) => {
    setSetYear(selectedYear);
  };

  const filteredExpense = props.title.filter((expense) => {
    return expense.date.getFullYear().toString() === setYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={setYear} onChangeYear={saveYearData} />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList item={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expenses;

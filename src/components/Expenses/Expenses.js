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
  const filteredItem = props.title.filter((item) => {
    item.date == setYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={setYear} onChangeYear={saveYearData} />

        {filteredItem.map((expense) => (
          <ExpensItem
            key={expense.id}
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

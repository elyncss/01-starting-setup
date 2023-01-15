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
    <Card className="expenses">
      <ExpensesFilter selected={setYear} onChangeYear={saveYearData} />
      <ExpensItem
        date={props.title[0].date}
        title={props.title[0].title}
        amount={props.title[0].amount}
      />
      <ExpensItem
        date={props.title[1].date}
        title={props.title[1].title}
        amount={props.title[1].amount}
      />
      <ExpensItem
        date={props.title[2].date}
        title={props.title[2].title}
        amount={props.title[2].amount}
      />
    </Card>
  );
};

export default Expenses;

import React from "react";
import Card from "../Card/Card";
import ExpensItem from "../ExpensItem/ExpensItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
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

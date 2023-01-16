import React from "react";
import Card from "../Card/Card";
import ExpensDate from "../ExpensDate/ExpensDate";
import "./ExpensItem.css";

const ExpensItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpensDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpensItem;

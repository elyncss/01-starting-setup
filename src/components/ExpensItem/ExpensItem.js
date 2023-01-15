import React, { useState } from "react";
import Card from "../Card/Card";
import ExpensDate from "../ExpensDate/ExpensDate";
import "./ExpensItem.css";

const ExpensItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("elxannnnnnnnnnnnnn");

  const clickHandler = () => {
    setTitle("updates");
  };
  return (
    <Card className="expense-item">
      <ExpensDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpensItem;

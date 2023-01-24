import { useState } from "react";
import Chart from "./components/Chart/Chart";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/InputFile/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    date: new Date(2022, 2, 28),
    title: "Car insurance",
    amount: 294.67,
  },
  {
    id: 2,
    date: new Date(2022, 3, 18),
    title: "qonaqliq",
    amount: 25.67,
  },
  {
    id: 3,
    date: new Date(2022, 4, 21),
    title: "kontur",
    amount: 80.67,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses title={expenses} />
    </div>
  );
};

export default App;

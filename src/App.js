import ExpensItem from "./components/ExpensItem";

function App() {
  const expense = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>semimi seyler yaratmaq lazimdi qaqas</p>
      <ExpensItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpensItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpensItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
    </div>
  );
}

export default App;

import Expenses from "./components/Expenses/Expenses";

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
      <Expenses title={expense} />
    </div>
  );
}

export default App;

import Expenses from "./components/Expenses/Expenses.js";

function App() {
  const expenses = [
    { id: 'e1', title: 'Paper', amount: 29.83, date: new Date(2022, 2, 28) },
    { id: 'e2', title: 'New TV', amount: 700.28, date: new Date(2022, 2, 28) },
    { id: 'e3', title: 'Car Insurance', amount: 294.28, date: new Date(2022, 2, 28) },
    { id: 'e4', title: 'New Desk', amount: 24.28, date: new Date(2022, 2, 28) }
  ]

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

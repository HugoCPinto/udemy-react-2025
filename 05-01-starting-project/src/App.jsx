import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 1,
  });

  let anualData = calculateInvestmentResults(userInput);

  function handleChange(inputId, value) {
    setUserInput((prev) => {
      return { ...prev, [inputId]: +value };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      <ResultsTable results={anualData} />
    </>
  );
}

export default App;

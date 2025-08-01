import React from "react";
import Counter from "./Components/Counter";
import SayWelcome from "./Components/SayWelcome";
import SyntheticEventDemo from "./Components/SyntheticEventDemo";
import CurrencyConvertor from "./Components/CurrencyConvertor";

function App() {
  return (
    <div>
      <h1>React Event Handling Demo</h1>
      <Counter />
      <SayWelcome />
      <SyntheticEventDemo />
      <CurrencyConvertor />
    </div>
  );
}

export default App;

import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = (parseFloat(rupees) / 89).toFixed(2);
    setEuro(result);
  };

  return (
    <div>
      <h3>Currency Convertor (INR to EURO)</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter INR"
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <p>Converted Euro: €{euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;

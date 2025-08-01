import React from "react";

function SayWelcome() {
  const greet = (msg) => {
    alert(`Message: ${msg}`);
  };

  return <button onClick={() => greet("Welcome!")}>Say Welcome</button>;
}

export default SayWelcome;

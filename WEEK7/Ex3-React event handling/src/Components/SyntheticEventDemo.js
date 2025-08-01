import React from "react";

function SyntheticEventDemo() {
  const handleClick = (event) => {
    alert("I was clicked!");
    console.log("Synthetic Event Type:", event.type);
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default SyntheticEventDemo;

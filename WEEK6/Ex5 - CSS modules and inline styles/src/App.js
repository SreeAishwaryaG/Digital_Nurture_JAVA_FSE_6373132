// App.js
import React from "react";
import CohortDetails from "./Components/CohortDetails";

function App() {
  const cohorts = [
    {
      name: "React Bootcamp",
      status: "ongoing",
      description: "Learning React basics",
    },
    {
      name: "Java Backend",
      status: "completed",
      description: "Advanced Java topics",
    },
  ];

  return (
    <div>
      <h2>Cohort Dashboard</h2>
      {cohorts.map((cohort, index) => (
        <CohortDetails
          key={index}
          name={cohort.name}
          status={cohort.status}
          description={cohort.description}
        />
      ))}
    </div>
  );
}

export default App;

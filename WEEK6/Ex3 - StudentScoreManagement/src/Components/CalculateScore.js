import React from 'react';
import '../Components/mystyle.css';

function CalculateScore(props) {
  const { name, school, total, goal } = props;
  const average = total / goal;

  return (
    <div className="score-card">
      <h2>Student Score Report</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Marks:</strong> {total}</p>
      <p><strong>Number of Subjects:</strong> {goal}</p>
      <p className="highlight"><strong>Average Score:</strong> {average.toFixed(2)}</p>
    </div>
  );
}

export default CalculateScore;

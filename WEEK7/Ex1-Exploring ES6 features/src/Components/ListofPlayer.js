import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 80 },
    { name: 'Dhoni', score: 50 },
    { name: 'Jadeja', score: 85 },
    { name: 'Pant', score: 45 },
    { name: 'KL Rahul', score: 70 },
    { name: 'Ashwin', score: 40 },
    { name: 'Shami', score: 60 },
    { name: 'Bumrah', score: 90 },
    { name: 'Gill', score: 55 },
    { name: 'Surya', score: 78 },
  ];

  const filteredPlayers = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>Players with Score greater than or equal to 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;

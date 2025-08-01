import React from 'react';

const IndianPlayers = () => {
  const team = ['Virat', 'Rohit', 'Dhoni', 'Jadeja', 'Pant', 'KL Rahul', 'Ashwin', 'Shami'];

  // Destructuring to separate odd/even index players
  const oddTeam = team.filter((_, index) => index % 2 !== 0);
  const evenTeam = team.filter((_, index) => index % 2 === 0);

  const T20players = ['Surya', 'Ishan', 'Hardik'];
  const RanjiTrophyPlayers = ['Pujara', 'Rahane'];

  // Merging arrays using spread
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged List of Players (T20 + Ranji)</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;

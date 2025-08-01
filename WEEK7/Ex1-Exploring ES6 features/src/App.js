import React from 'react';
import IndianPlayers from './Components/IndianPlayers';
import ListofPlayers from './Components/ListofPlayer';

const App = () => {
  const flag = false; 

  return (
    <div className="App">
      <h1> Cricket Team Dashboard</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
};

export default App;

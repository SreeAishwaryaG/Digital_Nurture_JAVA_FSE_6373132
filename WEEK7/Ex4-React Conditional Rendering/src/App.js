
import React, { useState } from 'react';
import Guest from './Components/Guset';
import User from './Components/User';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>✈️ Ticket Booking App</h1>
      {
        isLoggedIn
          ? <User onLogout={handleLogout} />
          : <Guest onLogin={handleLogin} />
      }
    </div>
  );
}

export default App;

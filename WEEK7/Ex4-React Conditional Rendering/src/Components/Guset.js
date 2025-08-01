import React from 'react';

function Guest(props) {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <p>You can browse available flights, but must log in to book tickets.</p>
      <button onClick={props.onLogin}>Login</button>
    </div>
  );
}

export default Guest;

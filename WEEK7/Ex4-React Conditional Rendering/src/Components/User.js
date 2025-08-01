
import React from 'react';

function User(props) {
  return (
    <div>
      <h2>Welcome User!</h2>
      <p>You are logged in. You can now book your tickets.</p>
      <button onClick={props.onLogout}>Logout</button>
    </div>
  );
}

export default User;

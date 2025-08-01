import React from 'react';

function App() {
  // Single office object
  const featuredOffice = {
    name: 'Premium Tower, Bangalore',
    rent: 75000,
    address: 'Electronic City Phase 1, Bangalore',
    image:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
  };

  // List of office spaces
  const officeList = [
    {
      name: 'Skyline Plaza, Mumbai',
      rent: 50000,
      address: 'Andheri East, Mumbai',
    },
    {
      name: 'Tech Park, Pune',
      rent: 85000,
      address: 'Hinjewadi, Pune',
    },
    {
      name: 'Corporate Hub, Delhi',
      rent: 60000,
      address: 'Connaught Place, Delhi',
    },
  ];

  // JSX inline styling function for rent
  const rentStyle = (rent) => ({
    color: rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold',
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🏢 Office Space Rental Dashboard</h1>

      {/* JSX element with attributes */}
      <img
        src={featuredOffice.image}
        alt="Office Space"
        style={{ width: '400px', borderRadius: '10px', marginBottom: '20px' }}
      />

      {/* Office Object JSX Rendering */}
      <h2>{featuredOffice.name}</h2>
      <p>
        <strong>Rent:</strong>{' '}
        <span style={rentStyle(featuredOffice.rent)}>
          ₹{featuredOffice.rent}
        </span>
      </p>
      <p>
        <strong>Address:</strong> {featuredOffice.address}
      </p>

      <hr />

      {/* Looping over list of office objects */}
      <h2>📍 Other Available Office Spaces:</h2>
      <ul>
        {officeList.map((office, index) => (
          <li key={index} style={{ marginBottom: '15px' }}>
            <strong>{office.name}</strong>
            <br />
            Rent:{' '}
            <span style={rentStyle(office.rent)}>₹{office.rent}</span>
            <br />
            Address: {office.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

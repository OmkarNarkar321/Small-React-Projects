import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Assignment1 from './Assignment1/assignment1';
import Assignment2 from './Assignment2/assignment2';
import Assignment3 from './Assignment3/assignment3';
import Assignment4 from './Assignment4/assignment4';

function App() {
  const [currentRoute, setCurrentRoute] = useState('/assignment1');

  const routes = {
    '/assignment1': <Assignment1 />,
    '/assignment2': <Assignment2 />,
    '/assignment3': <Assignment3 />,
    '/assignment4': <Assignment4 />
  };

  return (
    <div>
      <Navbar currentRoute={currentRoute} onNavigate={setCurrentRoute} />
      <div>
        {routes[currentRoute] || routes['/assignment1']}
      </div>
    </div>
  );
}

export default App;
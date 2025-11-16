import React from 'react';

function Navbar({ currentRoute, onNavigate }) {
  return (
    <nav style={{ backgroundColor: '#2d3748', color: 'white', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>My Assignments</h1>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={() => onNavigate('/assignment1')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: currentRoute === '/assignment1' ? '#1a202c' : 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
            onMouseEnter={(e) => {
              if (currentRoute !== '/assignment1') {
                e.target.style.backgroundColor = '#4a5568';
              }
            }}
            onMouseLeave={(e) => {
              if (currentRoute !== '/assignment1') {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            Assignment 1
          </button>
          <button
            onClick={() => onNavigate('/assignment2')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: currentRoute === '/assignment2' ? '#1a202c' : 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
            onMouseEnter={(e) => {
              if (currentRoute !== '/assignment2') {
                e.target.style.backgroundColor = '#4a5568';
              }
            }}
            onMouseLeave={(e) => {
              if (currentRoute !== '/assignment2') {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            Assignment 2
          </button>
          <button
            onClick={() => onNavigate('/assignment3')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: currentRoute === '/assignment3' ? '#1a202c' : 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
            onMouseEnter={(e) => {
              if (currentRoute !== '/assignment3') {
                e.target.style.backgroundColor = '#4a5568';
              }
            }}
            onMouseLeave={(e) => {
              if (currentRoute !== '/assignment3') {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            Assignment 3
          </button>
          <button
            onClick={() => onNavigate('/assignment4')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: currentRoute === '/assignment4' ? '#1a202c' : 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
            onMouseEnter={(e) => {
              if (currentRoute !== '/assignment4') {
                e.target.style.backgroundColor = '#4a5568';
              }
            }}
            onMouseLeave={(e) => {
              if (currentRoute !== '/assignment4') {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            Assignment 4
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
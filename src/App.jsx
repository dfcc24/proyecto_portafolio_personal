// src/App.jsx
import React from 'react';
import AppRoutes from './routes/Routes';
import NavBar from './components/layout/NavBar';

const App = () => {
  return (
    <div>
      <NavBar />
      <AppRoutes />
    </div>
  );
};

export default App;

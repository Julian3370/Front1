import React from 'react';
import NavBar from '../components/NavBar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;

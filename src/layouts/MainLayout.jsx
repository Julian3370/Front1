import React from 'react';
import logo from '../assets/logo.png';

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <img src={logo} alt="Logo" />
        <h1>My App</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/dataset">Dataset</a></li>
            <li><a href="/tasks">Tasks</a></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Footer content</footer>
    </div>
  );
};

export default MainLayout;

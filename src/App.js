import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dataset from './components/Dataset';
import Tasks from './components/Tasks';
import MainLayout from './layouts/MainLayout';
import './App.css';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataset" element={<Dataset />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </MainLayout>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dataset from './components/Dataset';
import Tasks from './components/Tasks';
import MainLayout from './layouts/MainLayout';
import ImageGallery from './components/ImageGallery';
import './App.css';


function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<ImageGallery />} />  {/* Añade la ruta para ImageGallery */}
      </Routes>
    </MainLayout>
  );
}

export default App;

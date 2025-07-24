import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BooksPage from './pages/BooksPage';
import ArtPage from './pages/ArtPage';
import BonusScenesPage from './pages/BonusScenesPage';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/bonus-scenes" element={<BonusScenesPage />} />
      </Routes>
    </div>
  );
}

export default App;

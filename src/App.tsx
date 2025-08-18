import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BooksPage from './pages/BooksPage';
import ArtPage from './pages/ArtPage';
import BonusScenesPage from './pages/BonusScenesPage';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/art" element={<ArtPage />} />
          <Route path="/bonus-scenes" element={<BonusScenesPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;

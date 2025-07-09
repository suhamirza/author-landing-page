import React from 'react';
import Books from '../components/Books';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const BooksPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Add some top padding to account for fixed navbar */}
      <div className="pt-20">
        <Books />
        <Footer />
      </div>
    </div>
  );
};

export default BooksPage;

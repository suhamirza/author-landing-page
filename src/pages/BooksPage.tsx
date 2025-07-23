import React from 'react';
import Books from '../components/Books';
import Footer from '../components/Footer';

const BooksPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* No Navbar here since it's already in App.tsx */}
      <Books />
      <Footer />
    </div>
  );
};

export default BooksPage;

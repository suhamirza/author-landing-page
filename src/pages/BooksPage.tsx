import React, { useEffect } from 'react';
import Books from '../components/Books';
import Footer from '../components/Footer';

const BooksPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* No Navbar here since it's already in App.tsx */}
      <Books />
      <Footer />
    </div>
  );
};

export default BooksPage;

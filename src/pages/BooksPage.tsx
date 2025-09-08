import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Books from '../components/Books';
import Footer from '../components/Footer';

const BooksPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts (unless there's a hash)
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Books - Dublin Sisters Series | Hayat Khan"
        description="Explore the Dublin Sisters book series by Hayat Khan. Discover captivating stories of sisterhood, love, and adventure set in beautiful Dublin."
        url="https://hayatkhantheauthor.com/books"
        image="https://hayatkhantheauthor.com/images/bookone.webp"
        imageAlt="Dublin Sisters Book Series by Hayat Khan"
      />
      <Books />
      <Footer />
    </div>
  );
};

export default BooksPage;

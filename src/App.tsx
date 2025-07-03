import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Divider from './components/Divider';
import About from './components/About';
import Books from './components/Books';
import Footer from './components/Footer';

// Use it between sections
<Divider />

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Books />
      <Footer />
    </div>
  )
}

export default App

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Divider from './components/Divider';
import About from './components/About';
import Books from './components/Books';

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
    </div>
  )
}

export default App

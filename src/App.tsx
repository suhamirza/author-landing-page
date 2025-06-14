import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Divider from './components/Divider';

// Use it between sections
<Divider />

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Divider />
    </div>
  )
}

export default App

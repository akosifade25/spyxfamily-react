import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Trailer from './pages/Trailer';
import Character from './pages/Character';
import Footer from './components/Footer';
import Loading from './components/Loading';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(delay);
  }, []);

  return (
    <Router basename="/spyxfamily-react">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/trailer" element={<Trailer />} />
              <Route path="/characters" element={<Character />} />
            </Routes>
            <Footer />
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
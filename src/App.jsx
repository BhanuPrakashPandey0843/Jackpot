import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar/Navbar';
import Upperheader from './components/Upperheader/Upperheader'
import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage';
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Upperheader />
      <Navbar />
        {/* Main content takes available space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/contact" element={<ContactPage  />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

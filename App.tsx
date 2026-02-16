
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Home, Info, HelpCircle, Mail, MapPin, Search, Calendar, Award } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GenericPage from './pages/GenericPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/khanapara" element={<GenericPage title="Khanapara Teer Result" />} />
            <Route path="/shillong" element={<GenericPage title="Shillong Teer Result" />} />
            <Route path="/juwai" element={<GenericPage title="Juwai Teer Result" />} />
            <Route path="/previous-results" element={<GenericPage title="Previous Teer Results" />} />
            <Route path="/contact" element={<GenericPage title="Contact Us" />} />
            <Route path="/faq" element={<GenericPage title="Frequently Asked Questions" />} />
            <Route path="/about" element={<GenericPage title="About Teer Daily" />} />
            <Route path="/privacy-policy" element={<GenericPage title="Privacy Policy" />} />
            <Route path="/disclaimer" element={<GenericPage title="Disclaimer" />} />
            <Route path="/terms" element={<GenericPage title="Terms & Conditions" />} />
            <Route path="/sitemap" element={<GenericPage title="Sitemap" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

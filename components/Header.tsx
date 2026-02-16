
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Award } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-yellow-400 p-1.5 rounded-lg">
                <Award className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Teer<span className="text-yellow-600">Daily</span></span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-yellow-600">Home</Link>
            <Link to="/previous-results" className="text-sm font-medium text-slate-600 hover:text-yellow-600">Previous Results</Link>
            <Link to="/faq" className="text-sm font-medium text-slate-600 hover:text-yellow-600">FAQ</Link>
            <Link to="/contact" className="text-sm font-medium text-slate-600 hover:text-yellow-600">Contact</Link>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-yellow-600 hover:bg-slate-50">Home</Link>
            <Link to="/previous-results" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-yellow-600 hover:bg-slate-50">Previous Results</Link>
            <Link to="/faq" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-yellow-600 hover:bg-slate-50">FAQ</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-yellow-600 hover:bg-slate-50">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

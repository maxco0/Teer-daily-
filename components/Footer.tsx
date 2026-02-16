
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Shield, FileText, Map } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-2 mb-6">
            <div className="bg-yellow-400 p-1.5 rounded-lg">
              <div className="w-5 h-5 bg-slate-900 rounded-full"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">TeerDaily</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            The premier digital destination for archival Teer information, cultural research, and archery sports updates from North-East India.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
            <Shield className="w-4 h-4 text-yellow-400" /> Essential Links
          </h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-yellow-400 transition-colors">FAQ</Link></li>
            <li><Link to="/sitemap" className="hover:text-yellow-400 transition-colors">Sitemap</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
            <FileText className="w-4 h-4 text-yellow-400" /> Policies
            </h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-yellow-400 transition-colors">Disclaimer</Link></li>
            <li><Link to="/terms" className="hover:text-yellow-400 transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/editorial-policy" className="hover:text-yellow-400 transition-colors">Editorial Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
            <Mail className="w-4 h-4 text-yellow-400" /> Stay Connected
          </h4>
          <p className="text-sm text-slate-400 mb-4">Questions? Reach out via our official portal.</p>
          <div className="text-sm font-medium text-yellow-400">contact@teerdaily.example.com</div>
          <div className="mt-6">
            <span className="inline-block bg-slate-800 px-3 py-1 rounded text-xs text-slate-400">DMCA Protected</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800">
        <div className="text-center">
          <p className="text-xs text-slate-500 mb-4">
            Teer Daily is an independent informational portal and is not affiliated with any official archery clubs or government departments. We report archery results for informational and archival purposes only.
          </p>
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Teer Daily. All Rights Reserved. Responsible information portal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

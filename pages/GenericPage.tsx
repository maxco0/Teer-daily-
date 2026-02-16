
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Target, Info } from 'lucide-react';

interface GenericPageProps {
  title: string;
}

const GenericPage: React.FC<GenericPageProps> = ({ title }) => {
  const location = useLocation();

  return (
    <div className="min-h-[60vh] bg-white">
      <div className="bg-slate-50 border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <nav className="flex items-center text-xs text-slate-400 font-medium mb-6 uppercase tracking-widest">
             <a href="#" className="hover:text-yellow-600">Home</a>
             <ChevronRight className="w-3 h-3 mx-2" />
             <span className="text-slate-600">{title}</span>
           </nav>
           <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">{title}</h1>
           <p className="mt-4 text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
             Comprehensive details and historical records regarding {title.toLowerCase()} for archival research.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Info className="w-6 h-6 text-yellow-500" /> Information Overview
            </h2>
            <div className="prose prose-slate max-w-none">
              <p>
                {title} represents a critical data point in our daily archival process. We provide this information to ensure that enthusiasts and cultural researchers have access to verified data points from the ground in Shillong and surrounding areas.
              </p>
              <p>
                This page is dedicated to providing in-depth analysis of {title}. Our team works tirelessly to gather the most accurate archery statistics, ensuring that the legacy of North-East Indian bowmanship is documented with precision and integrity.
              </p>
              <h3>Key Highlights</h3>
              <ul>
                <li>Verified Ground Reports</li>
                <li>Archival Historical Data</li>
                <li>Cultural Significance and History</li>
                <li>Community-Driven Transparency</li>
              </ul>
            </div>
          </section>
          
          <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-100">
             <h3 className="text-xl font-bold text-slate-900 mb-4">Daily Schedule</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-white p-4 rounded-xl shadow-sm">
                 <div className="text-xs font-bold text-slate-400 uppercase mb-1">First Round</div>
                 <div className="text-xl font-black text-slate-900">03:45 PM - 04:00 PM</div>
               </div>
               <div className="bg-white p-4 rounded-xl shadow-sm">
                 <div className="text-xs font-bold text-slate-400 uppercase mb-1">Second Round</div>
                 <div className="text-xl font-black text-slate-900">04:45 PM - 05:00 PM</div>
               </div>
             </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-8">
           <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 opacity-10 rounded-full -mr-16 -mt-16"></div>
             <h3 className="text-lg font-bold mb-4 relative z-10">Archery Insights</h3>
             <p className="text-slate-400 text-sm mb-6 leading-relaxed relative z-10">
               Did you know that modern Teer archers use bamboo arrows specifically crafted for consistent flight dynamics?
             </p>
             <a href="#" className="inline-flex items-center text-yellow-400 text-sm font-bold group">
               Learn more history <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
             </a>
           </div>

           <div className="border border-slate-100 rounded-2xl p-6 bg-slate-50">
             <h3 className="text-slate-900 font-bold mb-4">Related Topics</h3>
             <ul className="space-y-4">
               {['Shillong Teer Results', 'Khanapara Teer Data', 'Juwai Archery Archive', 'Previous Year Statistics'].map((item) => (
                 <li key={item}>
                   <a href="#" className="flex items-center text-sm text-slate-600 hover:text-yellow-600 transition-colors">
                     <Target className="w-4 h-4 mr-2 text-slate-300" /> {item}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;

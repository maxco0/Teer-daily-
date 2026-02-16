
import React from 'react';
import { Target, Calendar, Clock, ArrowRight } from 'lucide-react';
import ResultCard from '../components/ResultCard';
import HitNumber from '../components/HitNumber';
import Article from '../components/Article';

const HomePage: React.FC = () => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-16 pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 opacity-5 blur-3xl -mr-32 -mt-32 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 opacity-5 blur-3xl -ml-48 -mb-48 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-yellow-400/10 text-yellow-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-yellow-400/20">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            Real-Time Updates
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
            Teer Daily – Accurate <span className="text-yellow-400">Archery Results</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed font-medium">
            Your trusted archival portal for historical Teer archery data, cultural insights, and daily results from Shillong, Khanapara, and Juwai.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold">{today}</span>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center space-x-3">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold">Status: Results Awaited</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 -mt-12 mb-20 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <ResultCard 
            title="Khanapara Teer" 
            description="Traditional archery event from the Ri-Bhoi district. Updated daily except Sundays."
            fr="--" 
            sr="--" 
            date={today}
            link="/khanapara"
            status="awaited"
          />
          <ResultCard 
            title="Shillong Teer" 
            description="The most iconic archery contest held at the historic Polo Grounds of Meghalaya."
            fr="--" 
            sr="--" 
            date={today}
            link="/shillong"
            status="awaited"
          />
          <ResultCard 
            title="Juwai Teer" 
            description="Cultural archery competition representing the Jaintia Hills region."
            fr="--" 
            sr="--" 
            date={today}
            link="/juwai"
            status="awaited"
          />
          <HitNumber />
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover-lift flex flex-col h-full">
            <div className="p-5 border-b border-slate-50">
              <h3 className="font-bold text-lg text-slate-900 tracking-tight">Recent History</h3>
              <p className="text-xs text-slate-500 mt-1 italic">Last 7 days archival data</p>
            </div>
            <div className="p-4 flex-grow">
               <div className="overflow-x-auto">
                 <table className="w-full text-xs text-left border-collapse">
                   <thead>
                     <tr className="border-b border-slate-100 bg-slate-50/50">
                       <th className="py-2 px-2 font-semibold text-slate-400 uppercase">Date</th>
                       <th className="py-2 px-2 font-semibold text-slate-400 uppercase">FR</th>
                       <th className="py-2 px-2 font-semibold text-slate-400 uppercase">SR</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-50">
                     {[...Array(5)].map((_, i) => (
                       <tr key={i} className="hover:bg-slate-50 transition-colors">
                         <td className="py-3 px-2 font-medium text-slate-600">May {10-i}, 2024</td>
                         <td className="py-3 px-2 font-bold text-slate-900">{Math.floor(Math.random()*99)}</td>
                         <td className="py-3 px-2 font-bold text-slate-900">{Math.floor(Math.random()*99)}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
            <a href="#" className="p-4 bg-slate-50 text-center text-sm font-semibold text-slate-600 hover:text-yellow-700 transition-colors">
              Full Archive Archive
            </a>
          </div>
          
          {/* AdSense Placeholder */}
          <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center p-8 min-h-[300px]">
             <div className="text-center">
               <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Advertisements</p>
               <p className="text-slate-300 text-sm">Space available for informational ads</p>
             </div>
          </div>
        </div>
      </section>

      {/* Long Form Article Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <Article />
      </section>
    </div>
  );
};

export default HomePage;

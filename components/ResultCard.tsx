
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar } from 'lucide-react';

interface ResultCardProps {
  title: string;
  description: string;
  fr: string;
  sr: string;
  date: string;
  link: string;
  status: 'declared' | 'awaited';
}

const ResultCard: React.FC<ResultCardProps> = ({ title, description, fr, sr, date, link, status }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover-lift flex flex-col h-full">
      <div className="p-5 border-b border-slate-50">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-slate-900 tracking-tight">{title}</h3>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            status === 'declared' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
          }`}>
            {status}
          </span>
        </div>
        <p className="text-xs text-slate-500 line-clamp-2">{description}</p>
      </div>
      
      <div className="p-5 flex-grow">
        <div className="flex items-center text-slate-400 text-xs mb-4">
          <Calendar className="w-3.5 h-3.5 mr-1" />
          <span>{date}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-lg p-4 text-center">
            <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Round 1</div>
            <div className={`text-3xl font-black ${status === 'declared' ? 'text-slate-900' : 'text-slate-300 italic'}`}>
              {fr}
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 text-center">
            <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Round 2</div>
            <div className={`text-3xl font-black ${status === 'declared' ? 'text-slate-900' : 'text-slate-300 italic'}`}>
              {sr}
            </div>
          </div>
        </div>
      </div>
      
      <Link to={link} className="p-4 bg-slate-50/50 hover:bg-yellow-50 flex items-center justify-center text-sm font-semibold text-slate-600 hover:text-yellow-700 transition-colors group">
        View Full Schedule
        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ResultCard;

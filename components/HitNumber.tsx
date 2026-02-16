
import React, { useState } from 'react';
import { Target, Save } from 'lucide-react';

const HitNumber: React.FC = () => {
  const [inputs, setInputs] = useState(['', '', '', '', '']);
  const [savedNumbers, setSavedNumbers] = useState<string[]>([]);

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value.slice(0, 2); // Limit to 2 digits
    setInputs(newInputs);
  };

  const handleSave = () => {
    setSavedNumbers(inputs.filter(n => n !== ''));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover-lift h-full">
      <div className="p-5 border-b border-slate-50">
        <div className="flex items-center space-x-2">
           <div className="bg-yellow-400 p-1 rounded-md">
             <Target className="w-4 h-4 text-slate-900" />
           </div>
           <h3 className="font-bold text-lg text-slate-900 tracking-tight">Personal Hit Analysis</h3>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-xs text-slate-500 mb-6 italic leading-relaxed">
          Use this panel to track your daily archery performance notes or personal analytical insights.
        </p>
        
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {inputs.map((val, idx) => (
            <input
              key={idx}
              type="text"
              value={val}
              onChange={(e) => handleInputChange(idx, e.target.value)}
              className="w-12 h-12 text-center bg-slate-50 border border-slate-200 rounded-lg text-lg font-bold focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="00"
            />
          ))}
        </div>

        <button 
          onClick={handleSave}
          className="w-full bg-slate-900 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
        >
          <Save className="w-4 h-4" /> Save Analysis
        </button>

        {savedNumbers.length > 0 && (
          <div className="mt-8">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Today's Focus Numbers</div>
            <div className="flex flex-wrap gap-2">
              {savedNumbers.map((num, i) => (
                <span key={i} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold border border-yellow-200">
                  {num}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HitNumber;

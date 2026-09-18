import React from 'react';
import { Gift, Check, MessageSquare, ArrowRight } from 'lucide-react';
import { Stage } from '../types';

interface ProgressIndicatorProps {
  stage: Stage;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ stage }) => {
  const isStep1 = stage === 'gift' || stage === 'opening';
  const isStep2 = stage === 'permission';
  const isStep3 = stage === 'redirecting';

  return (
    <div className="w-full flex justify-center py-2 px-4 relative z-20">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md text-[11px] font-medium text-slate-400 shadow-inner">
        {/* Step 1 */}
        <div className={`flex items-center gap-1.5 transition-colors duration-300 ${
          isStep1 ? 'text-amber-300 font-semibold' : 'text-emerald-400'
        }`}>
          <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
            isStep1 
              ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-400/30' 
              : 'bg-emerald-500 text-slate-950'
          }`}>
            {isStep1 ? '1' : '✓'}
          </span>
          <span>{isStep1 ? 'Presente' : 'Liberado'}</span>
        </div>

        <span className="text-slate-600">→</span>

        {/* Step 2 */}
        <div className={`flex items-center gap-1.5 transition-colors duration-300 ${
          isStep2 ? 'text-amber-300 font-semibold' : isStep3 ? 'text-emerald-400' : 'text-slate-500'
        }`}>
          <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
            isStep2 
              ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-400/30' 
              : isStep3 
                ? 'bg-emerald-500 text-slate-950' 
                : 'bg-slate-800 text-slate-400'
          }`}>
            2
          </span>
          <span>{isStep1 ? 'Acesso' : 'Agendamento'}</span>
        </div>

        <span className="text-slate-600">→</span>

        {/* Step 3 */}
        <div className={`flex items-center gap-1.5 transition-colors duration-300 ${
          isStep3 ? 'text-emerald-400 font-semibold' : 'text-slate-500'
        }`}>
          <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
            isStep3 
              ? 'bg-[#25D366] text-white shadow-sm shadow-emerald-500/50' 
              : 'bg-slate-800 text-slate-400'
          }`}>
            <MessageSquare className="w-2.5 h-2.5 fill-current" />
          </div>
          <span>WhatsApp</span>
        </div>
      </div>
    </div>
  );
};

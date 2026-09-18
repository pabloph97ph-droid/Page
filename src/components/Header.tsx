import React from 'react';
import { Award, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentStage: 'gift' | 'opening' | 'permission' | 'redirecting';
}

export const Header: React.FC<HeaderProps> = ({ currentStage }) => {
  return (
    <header className="w-full pt-5 pb-3 px-4 flex flex-col items-center justify-center relative z-20">
      {/* Academy Brand Crest */}
      <div className="flex items-center gap-2.5">
        <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 p-[1px] shadow-sm shadow-amber-500/20">
          <div className="w-full h-full bg-[#081225] rounded-[7px] flex items-center justify-center">
            <span className="font-cinzel text-xs font-bold text-amber-300 tracking-wider">
              DDL
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-cinzel text-sm sm:text-base font-semibold tracking-wider text-slate-100 uppercase">
              Domínio das Línguas
            </span>
            <span className="inline-block w-1 h-1 rounded-full bg-amber-400"></span>
          </div>
          <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
            International Language Academy
          </span>
        </div>
      </div>

      {/* Strategic Tagline: Fale inglês ainda em 2026 */}
      <div className="mt-2.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm shadow-sm shadow-amber-500/5">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-amber-200">
            Fale inglês ainda em 2026.
          </span>
        </div>
      </div>
    </header>
  );
};

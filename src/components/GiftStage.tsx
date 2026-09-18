import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Lock, CheckCircle2, Star } from 'lucide-react';

interface GiftStageProps {
  onOpen: () => void;
  isOpening: boolean;
}

export const GiftStage: React.FC<GiftStageProps> = ({ onOpen, isOpening }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked || isOpening) return;
    setClicked(true);
    onOpen();
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-between min-h-[calc(100vh-140px)] px-5 py-4 text-center select-none">
      {/* Top Banner / Announcement */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center pt-2"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-amber-500/10 mb-2">
          <span>🎁</span>
          <span>VOCÊ GANHOU UM PRESENTE</span>
        </div>

        <h1 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight mt-1">
          Uma aula de inglês da{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
            Domínio das Línguas.
          </span>
        </h1>

        <p className="mt-2 text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xs">
          Seu próximo nível internacional pode começar agora.
        </p>
      </motion.div>

      {/* Center Interactive Luxury Gift Box */}
      <div className="relative my-6 flex items-center justify-center w-full min-h-[220px]">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-amber-500/15 via-blue-600/15 to-amber-300/10 blur-3xl pointer-events-none" />

        {/* Floating Sparks/Particles around the box */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-44 h-44 rounded-full border border-amber-400/15"
          />
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute w-52 h-52 rounded-full border border-dashed border-amber-400/10"
          />
        </div>

        {/* The 3D-styled Gift Box */}
        <motion.div
          animate={
            isOpening
              ? { scale: [1, 1.05, 1.02] }
              : { y: [0, -6, 0] }
          }
          transition={
            isOpening
              ? { duration: 0.8 }
              : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
          }
          onClick={handleClick}
          className="relative cursor-pointer group focus:outline-none"
          tabIndex={0}
          role="button"
          aria-label="Abrir meu presente da Domínio das Línguas"
          id="gift-box-interactive"
        >
          {/* Box Shadow & Pedestal Glow */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-amber-500/20 rounded-full blur-md" />

          {/* Reveal Ticket (Emerges when opening) */}
          <AnimatePresence>
            {isOpening && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: -80, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute z-30 left-1/2 -translate-x-1/2 w-64 p-3 rounded-xl bg-gradient-to-br from-amber-100 via-white to-amber-200 text-slate-950 border-2 border-amber-400 shadow-2xl shadow-amber-500/40"
              >
                <div className="flex items-center justify-between pb-1.5 border-b border-amber-300/60">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
                    <span className="font-cinzel text-[10px] font-bold tracking-wider text-amber-900 uppercase">
                      VIP PASS DDL
                    </span>
                  </div>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-900 text-amber-200">
                    LIBERADO
                  </span>
                </div>
                <div className="pt-2 pb-1 text-center">
                  <p className="text-xs font-bold text-slate-900">
                    1 Aula de Inglês Exclusiva
                  </p>
                  <p className="text-[10px] text-slate-700">
                    Diagnóstico & Conversação Personalizada
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Box Container */}
          <div className="relative w-44 h-40 flex flex-col items-center justify-end">
            {/* Box Lid (Lifts on click) */}
            <motion.div
              animate={
                isOpening
                  ? {
                      y: -42,
                      rotate: -12,
                      opacity: 0.9,
                    }
                  : {}
              }
              transition={{ duration: 0.7, ease: 'backOut' }}
              className="relative z-20 w-48 h-12 rounded-t-xl bg-gradient-to-b from-[#14233D] via-[#0E1A2E] to-[#0A1324] border-t-2 border-x border-amber-400/50 shadow-lg flex items-center justify-center overflow-hidden"
            >
              {/* Gold Ribbon on Lid */}
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 border-x border-amber-300 shadow-sm" />
              
              {/* Bow Ribbon Top */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className="w-5 h-4 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 border border-amber-200 -rotate-25 shadow-sm" />
                <div className="w-5 h-4 rounded-full bg-gradient-to-bl from-amber-300 to-amber-500 border border-amber-200 rotate-25 shadow-sm -ml-1" />
                <div className="absolute w-3 h-3 rounded-full bg-amber-200 border border-amber-400 shadow" />
              </div>

              {/* Lid Gold Edge */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-amber-500/20 via-amber-300 to-amber-500/20" />
            </motion.div>

            {/* Box Body */}
            <div className="relative z-10 w-44 h-32 rounded-b-xl bg-gradient-to-b from-[#0E1A2E] to-[#060D1A] border-b-2 border-x border-amber-400/40 shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Vertical Gold Ribbon on Body */}
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 border-x border-amber-300/80 shadow-inner" />
              
              {/* Horizontal Ribbon */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-6 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 border-y border-amber-300/80 shadow-inner" />

              {/* Academy Gold Seal in Center */}
              <div className="relative z-20 w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 p-[1.5px] shadow-lg shadow-amber-500/30">
                <div className="w-full h-full rounded-full bg-[#081225] flex items-center justify-center">
                  <span className="font-cinzel text-[11px] font-extrabold text-amber-300">
                    DDL
                  </span>
                </div>
              </div>

              {/* Light beam burst on opening */}
              {isOpening && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1.5 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-t from-amber-400/40 via-amber-200/50 to-transparent pointer-events-none"
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Action Button: ABRIR MEU PRESENTE */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full flex flex-col items-center pb-2"
      >
        <button
          id="btn-abrir-presente"
          type="button"
          onClick={handleClick}
          disabled={clicked || isOpening}
          className="relative group w-full max-w-xs h-14 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold text-base sm:text-lg tracking-wide uppercase shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 overflow-hidden border border-amber-200"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <Sparkles className="w-5 h-5 text-slate-950" />
          <span>{isOpening ? 'REVELANDO AULA...' : 'ABRIR MEU PRESENTE'}</span>
          <ArrowRight className="w-5 h-5 text-slate-950 transition-transform group-hover:translate-x-1" />
        </button>

        <p className="mt-2.5 text-[11px] text-slate-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Experiência 100% gratuita • Vagas limitadas por turma</span>
        </p>
      </motion.div>
    </div>
  );
};

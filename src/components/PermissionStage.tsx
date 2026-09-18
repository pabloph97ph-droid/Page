import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, ArrowRight, ExternalLink, Clock, Sparkles } from 'lucide-react';

interface PermissionStageProps {
  onConfirmWhatsApp: () => void;
  whatsappUrl: string;
}

export const PermissionStage: React.FC<PermissionStageProps> = ({
  onConfirmWhatsApp,
  whatsappUrl,
}) => {
  const [hasClicked, setHasClicked] = useState(false);

  const handleAction = () => {
    setHasClicked(true);
    onConfirmWhatsApp();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-md mx-auto flex flex-col items-center justify-between min-h-[calc(100vh-140px)] px-5 py-3 text-center"
    >
      {/* Top Section */}
      <div className="flex flex-col items-center w-full pt-1">
        {/* VIP Status Pill */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wide shadow-sm shadow-emerald-500/10 mb-3"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Sua aula já está liberada.</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="font-cinzel text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug px-2"
        >
          Posso falar com você pelo{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-[#25D366]">
            WhatsApp?
          </span>
        </motion.h1>

        {/* Persuasive copy */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xs font-normal"
        >
          Só precisamos conversar rapidamente para entender seu objetivo com o inglês e combinar o melhor horário para você.
        </motion.p>
      </div>

      {/* WhatsApp Academy Card Preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.45 }}
        className="w-full my-4 p-4 rounded-2xl bg-gradient-to-b from-[#0E1A2E]/90 to-[#07101E]/90 border border-slate-800 shadow-xl backdrop-blur-md relative overflow-hidden"
      >
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex items-center gap-3.5 text-left">
          {/* WhatsApp / DDL Avatar Badge */}
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-[#0F291E] border border-emerald-500/40 flex items-center justify-center shadow-md">
              {/* WhatsApp Icon */}
              <svg
                className="w-6 h-6 fill-[#25D366]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.275-.1-.476-.15-.676.15-.2.301-.777.978-.952 1.179-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.494-.894-.798-1.498-1.784-1.674-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.176.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.927-2.235-.243-.587-.49-.507-.676-.516l-.577-.01c-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.507s1.078 2.908 1.229 3.109c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.378.197 1.898.12.579-.087 1.78-.728 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.126-.275-.201-.576-.351zM12.053 2.012C6.529 2.012 2.035 6.507 2.035 12.033c0 1.944.557 3.76 1.523 5.302L2 22.02l4.825-1.503c1.488.887 3.228 1.392 5.088 1.392 5.524 0 10.018-4.495 10.018-10.02 0-5.527-4.494-10.021-10.018-10.021z" />
              </svg>
            </div>
            {/* Online Pulse Dot */}
            <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#07101E]"></span>
            </span>
          </div>

          {/* Contact Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-white truncate">
                Coordenação DDL
              </span>
              <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                OFICIAL
              </span>
            </div>
            <p className="text-xs text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
              <span>●</span> Online para agendar seu horário
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5 font-mono">
              +55 11 91496-6246
            </p>
          </div>
        </div>

        {/* Message preview snippet */}
        <div className="mt-3.5 pt-3 border-t border-slate-800 text-left bg-slate-950/40 rounded-xl p-2.5">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
            Mensagem pronta para envio:
          </span>
          <p className="text-xs text-slate-200 italic line-clamp-2">
            "Olá! Acabei de fazer o diagnóstico da DDL e ganhei uma aula de inglês. Quero agendar minha aula."
          </p>
        </div>
      </motion.div>

      {/* Main Action Call-To-Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        className="w-full flex flex-col items-center pb-2"
      >
        <a
          id="btn-quero-minha-aula"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleAction}
          className="relative group w-full max-w-sm h-16 rounded-2xl bg-gradient-to-r from-emerald-500 via-[#25D366] to-emerald-600 text-slate-950 font-extrabold text-base sm:text-lg tracking-wide uppercase shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/45 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 border border-emerald-300/40 overflow-hidden cursor-pointer"
        >
          {/* Subtle button sheen */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          
          {/* WhatsApp Mini Icon inside button */}
          <svg className="w-6 h-6 fill-slate-950" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.275-.1-.476-.15-.676.15-.2.301-.777.978-.952 1.179-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.494-.894-.798-1.498-1.784-1.674-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.176.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.927-2.235-.243-.587-.49-.507-.676-.516l-.577-.01c-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.507s1.078 2.908 1.229 3.109c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.378.197 1.898.12.579-.087 1.78-.728 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.126-.275-.201-.576-.351zM12.053 2.012C6.529 2.012 2.035 6.507 2.035 12.033c0 1.944.557 3.76 1.523 5.302L2 22.02l4.825-1.503c1.488.887 3.228 1.392 5.088 1.392 5.524 0 10.018-4.495 10.018-10.02 0-5.527-4.494-10.021-10.018-10.021z" />
          </svg>

          <span>SIM, QUERO MINHA AULA</span>
          <ArrowRight className="w-5 h-5 text-slate-950 transition-transform group-hover:translate-x-1" />
        </a>

        {/* Required helper copy */}
        <p className="mt-2.5 text-xs text-slate-400 font-medium">
          Você será direcionado diretamente para o WhatsApp.
        </p>

        {/* Secondary immediate link in case popup blocker is active */}
        {hasClicked && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 p-2.5 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs text-slate-300"
          >
            <span>Conversa iniciando... Se não abrir automaticamente: </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 font-bold underline ml-1 hover:text-emerald-300"
            >
              Clique aqui para abrir
            </a>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

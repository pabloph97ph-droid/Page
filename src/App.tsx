/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { ProgressIndicator } from './components/ProgressIndicator';
import { GiftStage } from './components/GiftStage';
import { PermissionStage } from './components/PermissionStage';
import { BackgroundStars } from './components/BackgroundStars';
import { Stage } from './types';

const WHATSAPP_PHONE = '5511914966246';
const WHATSAPP_MESSAGE = 'Olá! Acabei de fazer o diagnóstico da DDL e ganhei uma aula de inglês. Quero agendar minha aula.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function App() {
  const [stage, setStage] = useState<Stage>('gift');

  // Trigger stage transition on gift open
  const handleOpenGift = () => {
    setStage('opening');
    setTimeout(() => {
      setStage('permission');
    }, 1100);
  };

  // Direct WhatsApp redirection
  const handleConfirmWhatsApp = () => {
    // Open WhatsApp directly
    try {
      window.open(WHATSAPP_URL, '_blank');
    } catch {
      window.location.href = WHATSAPP_URL;
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#060D1A] text-slate-100 flex flex-col justify-between overflow-x-hidden">
      {/* Visual Ambient Background */}
      <BackgroundStars />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col min-h-screen justify-between pb-4">
        {/* Top Header & Discreet Progress Tracker */}
        <div>
          <Header currentStage={stage} />
          <ProgressIndicator stage={stage} />
        </div>

        {/* Content Area with smooth transition */}
        <main className="flex-1 flex flex-col items-center justify-center w-full">
          <AnimatePresence mode="wait">
            {(stage === 'gift' || stage === 'opening') && (
              <motion.div
                key="stage-gift"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <GiftStage
                  onOpen={handleOpenGift}
                  isOpening={stage === 'opening'}
                />
              </motion.div>
            )}

            {stage === 'permission' && (
              <motion.div
                key="stage-permission"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <PermissionStage
                  onConfirmWhatsApp={handleConfirmWhatsApp}
                  whatsappUrl={WHATSAPP_URL}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Subtle Academy Brand Mark at bottom */}
        <footer className="w-full text-center py-2 px-4 relative z-20">
          <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
            © {new Date().getFullYear()} Domínio das Línguas • Todos os direitos reservados
          </p>
        </footer>
      </div>
    </div>
  );
}

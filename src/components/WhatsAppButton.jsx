import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5521999999999?text=Ol%C3%A1%2C+vim+pelo+site+da+Quality+Prime+e+gostaria+de+saber+mais+sobre+um+ve%C3%ADculo."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Círculo de Pulso (Efeito de onda) */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping duration-[1.5s]"></span>
      
      {/* Botão Principal */}
      <div className="relative flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.5)] hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300">
        <MessageCircle className="w-6 h-6 fill-current" />
        
        {/* Texto que aparece só no Desktop */}
        <span className="hidden md:block font-bold pr-1">
          Negociar Agora
        </span>
      </div>

      {/* Tooltip (Aparece ao passar o mouse) */}
      <div className="absolute right-0 bottom-full mb-3 w-max bg-white text-black text-xs font-bold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl translate-y-2 group-hover:translate-y-0 pointer-events-none">
        Atendimento Online 🟢
        <div className="absolute bottom-[-4px] right-8 w-2 h-2 bg-white rotate-45"></div>
      </div>
    </a>
  );
};
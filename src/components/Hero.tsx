import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center bg-black overflow-hidden">
      
      {/* 1. BACKGROUND IMERSIVO */}
      <div className="absolute inset-0 z-0">
        {/* Imagem de Alta Qualidade (Estilo Dark Studio) */}
        {/* object-right garante que o carro fique na direita */}
        <img 
          src="teste1.jpg" 
          alt="Carro Hero" 
          className="w-full h-full object-cover object-right opacity-90"
        />
        
        {/* 2. O DEGRADÊ MÁGICO (Cria o espaço para o texto na esquerda) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      </div>

      {/* 3. CONTEÚDO (Texto na esquerda, sobre o preto) */}
      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-2xl">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            {/* Tag Superior */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-amber-500"></span>
              <span className="text-amber-500 font-medium tracking-widest text-xs uppercase">
                Premium Cars Collection
              </span>
            </div>

            {/* Título */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Sua próxima <br/>
              conquista está <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">aqui.</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg font-light">
              Exclusividade, procedência e as melhores taxas do mercado. 
              Encontre o veículo que combina com o seu momento de vida.
            </p>

            {/* Botões */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#estoque" 
                className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-amber-500 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Ver Estoque Atual
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a 
                href="https://wa.me/5521SEUNUMERO" 
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com Consultor
              </a>
            </div>
          </motion.div>

          {/* Dados no Rodapé */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 flex gap-12 border-t border-white/10 pt-8"
          >
            <div>
              <p className="text-3xl font-bold text-white">150+</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Carros em Estoque</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">12x</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Garantia Estendida</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

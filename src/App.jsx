import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCarousel } from './components/FeaturedCarousel';
import { InstagramFeed } from './components/InstagramFeed';
import { ShieldCheck, BadgePercent, MessageCircle, MapPin, Phone } from 'lucide-react';

// --- COMPONENTE BENTO GRID (Interno) ---
const BentoGrid = () => {
  return (
    <section className="py-24 bg-[#020617] relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Por que a <span className="text-amber-500">Quality?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Card 1: Imagem Grande */}
          <div className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden border border-white/10 min-h-[300px] bg-slate-900">
            <img 
              src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1000" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" 
              alt="Carro Premium" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Curadoria Elite</h3>
              <p className="text-slate-300 text-lg max-w-md leading-relaxed">
                Não aceitamos qualquer carro. Apenas 5% dos veículos avaliados entram para o nosso estoque select após rigorosa inspeção.
              </p>
            </div>
          </div>

          {/* Card 2: Blindagem */}
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/10 hover:border-amber-500/50 transition-colors flex flex-col justify-center min-h-[200px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all" />
            <ShieldCheck className="w-10 h-10 text-amber-500 mb-4 relative z-10" />
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Garantia Total</h3>
            <p className="text-slate-400 text-sm relative z-10">Laudo cautelar aprovado e garantia mecânica estendida em contrato.</p>
          </div>

          {/* Card 3: Financiamento */}
          <div className="bg-gradient-to-br from-amber-600 to-amber-800 p-8 rounded-3xl flex flex-col justify-between min-h-[200px] text-black shadow-lg shadow-amber-900/20 relative overflow-hidden group">
             <div className="absolute inset-0 bg-black opacity-10 mix-blend-multiply" />
            <div className="relative z-10">
              <BadgePercent className="w-10 h-10 text-black mb-4" />
              <h3 className="text-xl font-bold">Taxas VIP</h3>
              <p className="text-black/80 font-medium text-sm mt-2">
                Condições exclusivas direto com a gerência dos bancos parceiros.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE BOTÃO WHATSAPP (Interno) ---
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5521999999999?text=Ol%C3%A1%2C+vim+pelo+site+da+Quality+Prime"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping duration-[1.5s]"></span>
      <div className="relative flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 md:px-5 md:py-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.5)] hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300">
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden md:block font-bold">Negociar Agora</span>
      </div>
    </a>
  );
};

// --- COMPONENTE FOOTER (Interno) ---
const Footer = () => (
  <footer className="bg-black py-12 border-t border-white/10 relative z-10">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
      
      {/* Coluna 1: Marca */}
      <div>
        <div className="text-2xl font-bold text-white tracking-tighter mb-4">
          QUALITY<span className="text-amber-500">PRIME</span>
        </div>
        <p className="text-slate-500 mb-6 max-w-xs">
          Referência em veículos premium e seminovos de altíssima qualidade no Rio de Janeiro.
        </p>
        <p className="text-slate-600">© 2025 Quality Prime.</p>
      </div>

      {/* Coluna 2: Contato */}
      <div>
        <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Contato</h4>
        <ul className="space-y-3 text-slate-400">
          <li className="flex items-center gap-2 hover:text-amber-500 transition-colors cursor-pointer">
            <Phone className="w-4 h-4" /> (21) 99999-9999
          </li>
          <li className="flex items-center gap-2 hover:text-amber-500 transition-colors cursor-pointer">
            <MapPin className="w-4 h-4" /> Av. das Américas, 000 - Barra
          </li>
          <li className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" /> contato@qualityprime.com.br
          </li>
        </ul>
      </div>

      {/* Coluna 3: Horários */}
      <div>
        <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Funcionamento</h4>
        <ul className="space-y-2 text-slate-400">
          <li>Segunda a Sexta: <span className="text-white">09h às 19h</span></li>
          <li>Sábado: <span className="text-white">09h às 14h</span></li>
          <li>Domingo: <span className="text-amber-500">Fechado</span></li>
        </ul>
      </div>
    </div>
  </footer>
);

// --- COMPONENTE PRINCIPAL (APP) ---
function App() {
  return (
    <main className="bg-[#020617] min-h-screen text-white font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <BentoGrid />
      <FeaturedCarousel />
      <InstagramFeed />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

export default App;

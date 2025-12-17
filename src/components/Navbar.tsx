"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-white">
          QUALITY<span className="text-amber-500">PRIME</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#estoque" className="text-slate-300 hover:text-white transition-colors text-sm uppercase tracking-widest">Estoque</a>
          <a href="#instagram" className="text-slate-300 hover:text-white transition-colors text-sm uppercase tracking-widest">Social</a>
          <a href="https://wa.me/5521SEUNUMERO" className="bg-white text-slate-950 px-6 py-2 rounded-full font-bold hover:bg-amber-500 hover:scale-105 transition-all duration-300">
            Fale Conosco
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-white/10 overflow-hidden"
          >
             <div className="p-4 flex flex-col gap-4">
                <a href="#estoque" onClick={() => setIsMenuOpen(false)} className="text-slate-300">Estoque</a>
                <a href="#instagram" onClick={() => setIsMenuOpen(false)} className="text-slate-300">Social</a>
                <a href="#contato" className="text-amber-500 font-bold">Fale Conosco</a>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
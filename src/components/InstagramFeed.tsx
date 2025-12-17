import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

export const InstagramFeed = () => {
  
  // AQUI VOCÊ CONTROLA AS FOTOS MANUALMENTE
  // Dica: Use fotos verticais ou quadradas para ficar perfeito
  const posts = [
    { 
      id: 1, 
      img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800', // Troque por: "/instagram/foto1.jpg"
      link: 'https://www.instagram.com/qualityprime10/',
      alt: 'Mercedes Benz na Quality Prime'
    },
    { 
      id: 2, 
      img: 'https://images.unsplash.com/photo-1605218427306-633ba8714ce3?q=80&w=800', // Troque por: "/instagram/foto2.jpg"
      link: 'https://www.instagram.com/qualityprime10/',
      alt: 'Entrega de chaves'
    },
    { 
      id: 3, 
      img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800', // Troque por: "/instagram/foto3.jpg"
      link: 'https://www.instagram.com/qualityprime10/',
      alt: 'Chevrolet Camaro'
    },
    { 
      id: 4, 
      img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800', // Troque por: "/instagram/foto4.jpg"
      link: 'https://www.instagram.com/qualityprime10/',
      alt: 'Cliente Satisfeito'
    },
  ];

  return (
    <section id="instagram" className="py-24 bg-black relative border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-12 relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-6 ring-1 ring-white/10">
            <Instagram className="w-6 h-6 text-amber-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Siga <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">@qualityprime10</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-lg">
            Confira nossas entregas recentes e novidades exclusivas no Instagram.
          </p>
        </div>

        {/* Grid de Fotos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {posts.map((post) => (
            <a 
              key={post.id} 
              href={post.link} 
              target="_blank" 
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-900 border border-white/10 shadow-lg cursor-pointer"
            >
              {/* Imagem com Zoom no Hover */}
              <img 
                src={post.img} 
                alt={post.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Overlay Escuro + Ícone */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ExternalLink className="text-amber-500 w-8 h-8 mb-2 mx-auto" />
                  <span className="text-white text-xs font-bold uppercase tracking-wider">Ver no Instagram</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Botão Inferior */}
        <div className="mt-12">
          <a 
            href="https://www.instagram.com/qualityprime10/" 
            target="_blank" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300"
          >
            <Instagram className="w-4 h-4" />
            Ver perfil completo
          </a>
        </div>
      </div>
    </section>
  );
};
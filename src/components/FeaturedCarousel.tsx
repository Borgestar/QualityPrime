import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';

const cars = [
  { 
    id: 1, 
    name: "JEEP Compass Longitude", 
    year: "2023", 
    price: "R$ 149.900", 
    km: "15.000 KM",
    // Foto: SUV Branco Moderno (Genérico, parece Compass)
    img: "fotojeep.jpg"
  },
  { 
    id: 2, 
    name: "TOYOTA Corolla XEi", 
    year: "2024", 
    price: "R$ 145.500", 
    km: "0 KM",
    // Foto: Sedan Prata/Cinza (Estilo Corolla)
    img: "fotocoroloa.jpg" 
  },
  { 
    id: 3, 
    name: "VW T-Cross Highline", 
    year: "2023", 
    price: "R$ 132.900", 
    km: "22.000 KM",
    // Foto: SUV Compacto Urbano
    img: "fototcross.jpg" 
  },
  { 
    id: 4, 
    name: "FIAT Toro Volcano", 
    year: "2022", 
    price: "R$ 128.900", 
    km: "35.000 KM",
    // Foto: Picape/Caminhonete (Estilo Toro/Raptor)
    img: "fototoro.jpg" 
  },
  { 
    id: 5, 
    name: "HONDA HR-V Touring", 
    year: "2023", 
    price: "R$ 164.000", 
    km: "12.000 KM",
    // Foto: Crossover Moderno
    img: "fotohrv.jpg"
  },
];

export const FeaturedCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = 360; 
      if (direction === 'left') {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section id="estoque" className="py-24 bg-[#020617] relative border-t border-white/5">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              <span className="text-amber-500 font-mono text-xs tracking-widest uppercase">Oportunidades</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              Novidades <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">do Mês</span>
            </h2>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')} 
              className="group p-4 rounded-full border border-white/10 hover:border-amber-500 hover:bg-amber-500 transition-all duration-300"
            >
              <ArrowLeft className="text-white group-hover:text-black w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="group p-4 rounded-full border border-white/10 hover:border-amber-500 hover:bg-amber-500 transition-all duration-300"
            >
              <ArrowRight className="text-white group-hover:text-black w-6 h-6" />
            </button>
          </div>
        </div>

        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory px-2"
          style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
        >
          {cars.map((car) => {
            const firstName = car.name.split(" ")[0];
            const restName = car.name.split(" ").slice(1).join(" ");

            return (
              <motion.div 
                key={car.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="min-w-[320px] md:min-w-[380px] snap-start bg-[#0B0F19] group relative overflow-hidden border border-white/5 hover:border-amber-500/50 transition-colors duration-500"
              >
                <div className="h-64 w-full overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-mono py-1 px-2 border border-white/10 uppercase tracking-widest">
                      {car.year}
                    </span>
                    <span className="bg-white/10 backdrop-blur-md text-slate-300 text-[10px] font-mono py-1 px-2 border border-white/10 uppercase tracking-widest">
                      {car.km}
                    </span>
                  </div>

                  <img 
                    src={car.img} 
                    alt={car.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    // Fallback para caso a imagem quebre
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop"; 
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent opacity-90" />
                </div>

                <div className="p-8 relative -mt-12">
                  <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-1 leading-none group-hover:translate-x-2 transition-transform duration-300">
                    {firstName} <br/>
                    <span className="text-amber-500 font-light not-italic text-xl">{restName}</span>
                  </h3>

                  <div className="w-full h-px bg-white/10 my-6 group-hover:bg-amber-500/50 transition-colors duration-500" />

                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Valor à vista</p>
                      <span className="text-xl font-bold text-white tracking-tight">{car.price}</span>
                    </div>

                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-all duration-300 relative overflow-hidden">
                      <Plus className="w-5 h-5 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="w-full h-px bg-white/5 mt-8 relative overflow-hidden">
             <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50 animate-shimmer" />
        </div>

      </div>
    </section>
  );
};

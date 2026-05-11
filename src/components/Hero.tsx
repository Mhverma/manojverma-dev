import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="hero" className="pt-40 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <div className="status-badge mb-12">
          <span className="status-dot"></span>
          Lead Engineer @ Singapore Airlines
        </div>
        
        <h1 className="text-[13vw] md:text-[10vw] font-black tracking-[-0.05em] mb-8 max-w-[12ch] mx-auto text-[#111] leading-[0.85] uppercase">
          Building <span className="text-slate-300">Intelligent</span> Systems.
        </h1>
        
        <div className="max-w-xl mx-auto space-y-8">
          <p className="text-xl md:text-2xl text-slate-500 leading-tight font-normal tracking-tight">
            Manoj Kumar H. Verma. 12+ years of architecting scalable cloud solutions & AI agent orchestration for global aviation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="#work" className="px-10 py-4 bg-[#111] text-white rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/10">
              Explore Work
            </a>
            <a href="mailto:manojkumarhverma@gmail.com" className="px-10 py-4 bg-white border border-slate-100 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 hover:border-slate-300">
              Contact
            </a>
          </div>
        </div>
      </motion.div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-screen pointer-events-none -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.05)_0%,transparent_50%)]"></div>
      </div>
    </section>
  );
}

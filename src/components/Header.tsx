import { motion } from "motion/react";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-8 pointer-events-none"
    >
      <div className="text-xl font-black uppercase italic tracking-tighter pointer-events-auto cursor-pointer">
        MV.
      </div>
      <nav className="flex items-center gap-10 bg-white/50 backdrop-blur-md px-8 py-3 rounded-full border border-black/5 pointer-events-auto">
        <a href="#hero" className="text-[10px] font-black uppercase tracking-widest hover:text-slate-400 transition-colors">Intro</a>
        <a href="#work" className="text-[10px] font-black uppercase tracking-widest hover:text-slate-400 transition-colors">Projects</a>
        <a href="#contact" className="text-[10px] font-black uppercase tracking-widest hover:text-slate-400 transition-colors">Connect</a>
      </nav>
      <div className="hidden md:block pointer-events-auto">
        <button className="px-6 py-2 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
          Resume
        </button>
      </div>
    </motion.header>
  );
}

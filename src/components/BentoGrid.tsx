import { motion } from "motion/react";
import { Github, Linkedin, Mail, Zap, Globe, Cpu, Terminal, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "AMS Concierge",
    subtitle: "Lead Architect @ Singapore Airlines",
    description: "Multi-agent AI ecosystem for Altea backend automation. Hierarchical delegation for PNR, e-ticketing, and incident resolution. Achieved 2-3x faster scaling.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop",
    tags: ["Next.js 15", "React 19", "Claude SDK", "AWS"],
    span: "md:col-span-2 md:row-span-2"
  },
  {
    title: "DevOps Sentinel",
    subtitle: "AI Automation Agent",
    description: "Autonomous remediation across 90+ microservices in OpenShift. 80% reduction in manual effort.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2026&auto=format&fit=crop",
    tags: ["Jenkins", "Python", "Docker"],
    span: "md:col-span-1 md:row-span-1"
  },
  {
    title: "SQ Kiosk 2.0",
    subtitle: "Enterprise Re-platform",
    description: "Self-service check-in legacy migration to modern microservices. 60% load reduction.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop",
    tags: ["Java 17", "Spring Boot", "EKS"],
    span: "md:col-span-1 md:row-span-1"
  }
];

export default function BentoGrid() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[300px]">
        
        {/* Core Expertise: AI */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card group"
        >
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center transition-transform group-hover:rotate-12">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 uppercase italic">GenAI Orchestration</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Pioneering multi-agent systems and prompt frameworks with advanced security controls for enterprise deployments.
              </p>
            </div>
          </div>
          <div className="flex gap-2 pt-4">
             <span className="w-2 h-2 rounded-full bg-slate-200"></span>
             <span className="w-2 h-2 rounded-full bg-slate-200"></span>
             <span className="w-2 h-2 rounded-full bg-slate-900"></span>
          </div>
        </motion.div>

        {/* Flagship Project */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bento-card md:col-span-2 md:row-span-2 p-0 group"
        >
          <img 
            src={PROJECTS[0].image} 
            alt={PROJECTS[0].title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/20 to-transparent p-10 flex flex-col justify-end text-white">
            <div className="flex justify-between items-end">
              <div className="max-w-md">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 mb-3 block">{PROJECTS[0].subtitle}</span>
                <h3 className="text-5xl font-black mb-4 uppercase italic leading-[0.8]">{PROJECTS[0].title}</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed hidden sm:block">{PROJECTS[0].description}</p>
                <div className="flex flex-wrap gap-2">
                  {PROJECTS[0].tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 backdrop-blur-md rounded-full text-[10px] font-bold border border-white/10 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-12">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Infrastructure Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bento-card group"
        >
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-transform group-hover:-rotate-12">
              <Cpu className="w-6 h-6 text-slate-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 uppercase italic">System Architecture</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Expert in AWS Cloud, Kubernetes (EKS), and High-Availability Microservices for mission-critical operations.
              </p>
            </div>
          </div>
          <div className="pt-4 font-mono text-[10px] text-slate-300 uppercase tracking-widest">
            Architecture / scaling / cloud
          </div>
        </motion.div>

        {/* Dynamic Tech Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bento-card md:col-span-1 p-0 flex flex-col justify-center bg-black overflow-hidden group"
        >
          <div className="py-8 space-y-4">
            <div className="flex whitespace-nowrap animate-marquee">
              {['Java 17', 'Spring Boot', 'TypeScript', 'React', 'Next.js', 'LLMs', 'Java 17', 'Spring Boot'].map((tool, i) => (
                 <span key={i} className="text-5xl font-black text-white/10 uppercase italic mx-4 transition-all group-hover:text-white/30">{tool}</span>
              ))}
            </div>
            <div className="flex whitespace-nowrap animate-marquee-reverse">
              {['AWS EKS', 'Kubernetes', 'Jenkins', 'Claude SDK', 'MCP', 'Node.js', 'AWS EKS', 'Kubernetes'].map((tool, i) => (
                 <span key={i} className="text-5xl font-black text-white/5 uppercase italic mx-4 transition-all group-hover:text-white/20">{tool}</span>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            .animate-marquee { animation: marquee 20s linear infinite; }
            .animate-marquee-reverse { animation: marquee 15s linear infinite reverse; }
          `}</style>
        </motion.div>

        {/* Integration Expertise */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bento-card group"
        >
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-transform group-hover:scale-110">
              <Terminal className="w-6 h-6 text-slate-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 uppercase italic">System Integration</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Deep experience with Altea GDS, Boomi, Apache Camel, and mission-critial airline operational APIs.
              </p>
            </div>
          </div>
          <div className="flex gap-4 pt-4 border-t border-slate-50 mt-auto">
            <Linkedin className="w-4 h-4 text-slate-300 hover:text-black cursor-pointer transition-colors" />
            <Mail className="w-4 h-4 text-slate-300 hover:text-black cursor-pointer transition-colors" />
          </div>
        </motion.div>

        {/* Second Project: DevOps */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bento-card p-0 group"
        >
          <img 
            src={PROJECTS[1].image} 
            alt={PROJECTS[1].title}
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 p-8 flex flex-col justify-end bg-black/40 group-hover:bg-black/20 transition-all">
             <span className="text-[9px] font-bold uppercase tracking-widest text-white/60 mb-2">Internal Tool</span>
             <h4 className="text-2xl font-black text-white uppercase italic leading-tight">{PROJECTS[1].title}</h4>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

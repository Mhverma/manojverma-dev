import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-40 px-6 border-t border-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-left"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 block">Get in touch</span>
          <h2 className="text-[10vw] md:text-[8vw] font-black mb-16 uppercase italic leading-[0.8] tracking-tighter">
            Let's build <br /> something <span className="text-slate-300">Great</span>.
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <a 
              href="mailto:manojkumarhverma@gmail.com"
              className="group text-3xl md:text-5xl font-medium tracking-tight border-b-4 border-black pb-2 hover:text-slate-500 transition-colors inline-flex items-center gap-4"
            >
              manojkumarhverma@gmail.com <ArrowRight className="w-8 h-8 md:w-12 md:h-12 -rotate-45 group-hover:rotate-0 transition-transform" />
            </a>

            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Socials</p>
              <div className="flex gap-8">
                <a href="https://www.linkedin.com/in/manoj-verma-43035361/" target="_blank" rel="noreferrer" className="text-lg font-bold uppercase italic tracking-tighter hover:text-slate-400 transition-colors">LinkedIn</a>
                <a href="#" className="text-lg font-bold uppercase italic tracking-tighter hover:text-slate-400 transition-colors">GitHub</a>
                <a href="#" className="text-lg font-bold uppercase italic tracking-tighter hover:text-slate-400 transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-40 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300">© 2024 Manoj Kumar H. Verma. Developed in Singapore.</p>
          <div className="flex gap-8">
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Available for innovative projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

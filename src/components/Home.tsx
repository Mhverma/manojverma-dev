import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext";

export default function Home() {
  const { isDark, toggle } = useTheme();

  const expertise = [
    "Full Stack Engineer",
    "Solution Architect",
    "Cloud Infrastructure Expert",
    "AI Systems Pioneer"
  ];

  const services = [
    {
      title: "GenAI & Multi-Agent Systems",
      items: [
        "Design and orchestrate complex multi-agent AI ecosystems",
        "Implement advanced prompt frameworks with security controls",
        "Enterprise-grade LLM integration and optimization"
      ]
    },
    {
      title: "Cloud Architecture & Microservices",
      items: [
        "AWS, Kubernetes (EKS), and OpenShift infrastructure design",
        "High-availability system architecture for mission-critical operations",
        "Scalable microservices patterns and implementation"
      ]
    },
    {
      title: "Enterprise Integration",
      items: [
        "Altea GDS, Boomi, Apache Camel expertise",
        "Legacy system modernization and re-platforming",
        "Mission-critical airline operational APIs"
      ]
    }
  ];

  return (
    <div className={isDark ? "dark" : ""}>
      <div className={`transition-colors duration-300 ${isDark ? "bg-[#1a1a1a] text-white" : "bg-white text-[#111111]"}`}>
        {/* Header with Theme Toggle */}
        <header className={`sticky top-0 z-50 ${isDark ? "bg-[#1a1a1a]/95 border-[#333333]" : "bg-white/95 border-slate-100"} border-b backdrop-blur-md`}>
          <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
            <div className="text-2xl font-black italic tracking-tighter">MV.</div>
            <button
              onClick={toggle}
              className={`p-2 rounded-lg transition-colors ${isDark ? "bg-[#333333] hover:bg-[#444444]" : "bg-slate-100 hover:bg-slate-200"}`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-20">
          {/* Hero Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            {/* Left - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`relative w-80 h-80 mx-auto ${isDark ? "bg-gradient-to-br from-[#333333] to-[#1a1a1a]" : "bg-gradient-to-br from-slate-100 to-slate-50"} rounded-full overflow-hidden border-4 ${isDark ? "border-[#333333]" : "border-slate-200"} flex items-center justify-center`}>
                {/* Placeholder Avatar */}
                <div className={`flex items-center justify-center w-full h-full text-6xl font-black ${isDark ? "text-[#333333]" : "text-slate-300"}`}>
                  MV
                </div>
              </div>
            </motion.div>

            {/* Right - Profile Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                  Manoj Verma
                </h1>
                <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? "text-gray-300" : "text-slate-600"}`}>
                  Full Stack Engineer & Solution Architect
                </h2>
                <p className={`text-lg font-semibold tracking-wide ${isDark ? "text-gray-400" : "text-slate-500"}`}>
                  Lead Engineer @ Singapore Airlines
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="space-y-4">
                <p className={`text-sm font-bold uppercase tracking-widest ${isDark ? "text-gray-500" : "text-slate-400"}`}>
                  Core Expertise
                </p>
                <div className="flex flex-wrap gap-3">
                  {expertise.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${isDark ? "bg-[#333333] text-white border border-[#444444] hover:border-white" : "bg-slate-100 text-slate-900 border border-slate-200 hover:border-slate-400"}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href="mailto:manojkumarhverma@gmail.com"
                  className={`px-8 py-3 rounded-lg font-bold transition-all ${isDark ? "bg-white text-black hover:scale-105" : "bg-black text-white hover:scale-105"}`}
                >
                  Get in Touch
                </a>
                <a
                  href="#work"
                  className={`px-8 py-3 rounded-lg font-bold transition-all border ${isDark ? "border-white text-white hover:bg-white hover:text-black" : "border-black text-black hover:bg-black hover:text-white"}`}
                >
                  View Work
                </a>
              </div>
            </motion.div>
          </section>

          {/* Services Section */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-16">What I Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`p-8 rounded-2xl ${isDark ? "bg-[#2a2a2a] border border-[#333333] hover:border-[#444444]" : "bg-slate-50 border border-slate-200 hover:border-slate-300"} transition-all`}
                  >
                    <h3 className="text-xl font-bold mb-6">{service.title}</h3>
                    <ul className="space-y-4">
                      {service.items.map((item, idx) => (
                        <li key={idx} className={`flex gap-3 text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-slate-600"}`}>
                          <span className="text-green-500 font-bold mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Stats Section */}
          <section className={`rounded-3xl p-12 mb-32 ${isDark ? "bg-[#2a2a2a]" : "bg-slate-50"}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-5xl font-black mb-2">12+</h3>
                <p className={isDark ? "text-gray-400" : "text-slate-600"}>Years of Experience</p>
              </div>
              <div>
                <h3 className="text-5xl font-black mb-2">50+</h3>
                <p className={isDark ? "text-gray-400" : "text-slate-600"}>Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-5xl font-black mb-2">Global</h3>
                <p className={isDark ? "text-gray-400" : "text-slate-600"}>Scale Infrastructure</p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={`border-t ${isDark ? "border-[#333333] bg-[#0f0f0f]" : "border-slate-100"}`}>
          <div className="max-w-7xl mx-auto px-6 py-12 text-center">
            <p className={`text-sm font-semibold tracking-widest ${isDark ? "text-gray-500" : "text-slate-500"}`}>
              © 2024 Manoj Verma. Available for innovative projects.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

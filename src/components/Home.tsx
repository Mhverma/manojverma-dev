import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeContext";
import Header from "./Header";
import Footer from "./Footer";

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
      <Header />
      <div className={`transition-colors duration-300 ${isDark ? "bg-[#1a1a1a] text-white" : "bg-white text-[#111111]"}`}>
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-20">
          {/* Hero Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            {/* Left - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/MV.png" 
                  alt="Manoj Verma - Full Stack Engineer and Solution Architect"
                  className="w-full h-auto object-contain"
                />
                <div className={`absolute inset-0 pointer-events-none ${isDark ? "bg-gradient-to-t from-[#1a1a1a]/20 to-transparent" : "bg-gradient-to-t from-black/5 to-transparent"}`}></div>
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
                
                {/* Value Proposition Tagline */}
                <p className={`text-lg leading-relaxed mt-4 mb-6 ${isDark ? "text-gray-300" : "text-slate-600"}`}>
                  I help enterprises ship resilient cloud systems and AI-powered workflows — from architecture to production.
                </p>
              </div>

              {/* Expertise Tags - Colour Coded */}
              <div className="space-y-4">
                <p className={`text-sm font-bold uppercase tracking-widest ${isDark ? "text-gray-500" : "text-slate-400"}`}>
                  Core Expertise
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { skill: "Full Stack Engineer", color: "bg-sky-100 text-sky-800" },
                    { skill: "Solution Architect", color: "bg-purple-100 text-purple-800" },
                    { skill: "Cloud Infrastructure Expert", color: "bg-green-100 text-green-800" },
                    { skill: "AI Systems Pioneer", color: "bg-orange-100 text-orange-800" }
                  ].map((item) => (
                    <span
                      key={item.skill}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${isDark ? "bg-[#333333] text-white" : item.color}`}
                    >
                      {item.skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons - Reordered: View Work (primary) first, Get in Touch (secondary) */}
              <div className="flex gap-4 pt-4">
                <a
                  href="#work"
                  className={`px-8 py-3 rounded-lg font-bold transition-all ${isDark ? "bg-white text-black hover:scale-105" : "bg-slate-900 text-white hover:scale-105"}`}
                >
                  View Work
                </a>
                <a
                  href="mailto:manojkumarhverma@gmail.com"
                  className={`px-8 py-3 rounded-lg font-bold transition-all border ${isDark ? "border-white text-white hover:bg-white hover:text-black" : "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"}`}
                >
                  Get in Touch
                </a>
              </div>

              {/* Social Proof Strip */}
              <div className={`flex gap-8 pt-6 mt-6 border-t ${isDark ? "border-gray-700" : "border-slate-200"}`}>
                <div className="flex flex-col gap-1">
                  <span className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>12+</span>
                  <span className={`text-xs ${isDark ? "text-gray-400" : "text-slate-600"}`}>Years experience</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>50+</span>
                  <span className={`text-xs ${isDark ? "text-gray-400" : "text-slate-600"}`}>Projects delivered</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Lead</span>
                  <span className={`text-xs ${isDark ? "text-gray-400" : "text-slate-600"}`}>@ Singapore Airlines</span>
                </div>
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
                    className={`relative p-8 rounded-2xl transition-all ${
                      index === 0
                        ? isDark 
                          ? "bg-[#2a2a2a] border-2 border-slate-900 hover:border-slate-800" 
                          : "bg-slate-50 border-2 border-slate-900 hover:border-slate-800"
                        : isDark 
                          ? "bg-[#2a2a2a] border border-[#333333] hover:border-[#444444]" 
                          : "bg-slate-50 border border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {index === 0 && (
                      <div className="mb-4 inline-block">
                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                          isDark ? "bg-slate-800 text-slate-200" : "bg-slate-200 text-slate-800"
                        }`}>
                          Core service
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-6">{service.title}</h3>
                    <ul className="space-y-4">
                      {service.items.map((item, idx) => (
                        <li key={idx} className={`flex gap-3 text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-slate-600"}`}>
                          <span className="text-green-500 font-bold mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                      <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                        {index === 0 && "→ AI workflows your team can ship and trust"}
                        {index === 1 && "→ Scalable infrastructure built for resilience"}
                        {index === 2 && "→ Legacy modernization that drives revenue"}
                      </p>
                    </div>
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

        <Footer />
      </div>
    </div>
  );
}

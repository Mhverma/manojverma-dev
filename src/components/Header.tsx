import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(typeof window !== 'undefined' ? window.location.hash || '#hero' : '#hero');

  useEffect(() => {
    const onHash = () => setCurrentHash(window.location.hash || '#hero');
    window.addEventListener('hashchange', onHash);

    // Scroll spy for active state
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '#hero';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
          current = `#${section.getAttribute('id')}`;
        }
      });
      
      setCurrentHash(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('hashchange', onHash);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    { href: '#hero', label: 'Intro' },
    { href: '#work', label: 'Projects' },
    { href: '#contact', label: 'Connect' }
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 md:px-8 md:py-4 pointer-events-auto bg-slate-900 text-white shadow-md"
    >
      <a href="#hero" aria-label="Home" className="text-2xl font-extrabold tracking-tight text-white">
        MV.
      </a>

      {/* Desktop nav */}
      <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group relative inline-block text-sm font-medium tracking-tight px-2 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/10 ${currentHash === link.href ? 'text-white' : 'text-slate-300 hover:text-white'}`}
                aria-current={currentHash === link.href ? 'page' : undefined}
              >
                {link.label}
                {/* animated underline */}
                <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-white transition-all duration-300 ${currentHash === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Resume Button */}
      <div className="hidden md:block">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-white/30 text-sm font-medium rounded-md text-white hover:bg-white/10 transition-colors"
        >
          Resume ↗
        </a>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="p-2 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-slate-900 text-white p-4 md:hidden shadow-lg border-t border-white/10">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded text-base font-medium ${currentHash === link.href ? 'text-white bg-slate-800' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block w-full text-center px-4 py-3 bg-white text-slate-900 rounded-md font-medium"
              >
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}

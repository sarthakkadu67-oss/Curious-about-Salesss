import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Rocket, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, theme, toggleTheme }) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const links = [
    { name: "Process", href: "#process" },
    { name: "Services", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "About Us", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  const logoText = "Curious About Sales";

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-brand-dark/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Animated Logo with Glowing Rocket */}
        <a href="#" className="flex items-center gap-2 group">
           <div className="relative">
             <div className="absolute inset-0 bg-brand-500/50 blur-lg rounded-full opacity-50 group-hover:opacity-100 transition-opacity animate-pulse"></div>
             <Rocket className="relative z-10 text-brand-500 dark:text-brand-purple fill-brand-500/20" strokeWidth={2.5} />
           </div>
           <div className="font-display font-bold text-xl md:text-2xl tracking-tight overflow-hidden flex text-gray-900 dark:text-white">
            {logoText.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: index * 0.03, type: "spring", stiffness: 150 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
           </div>
        </a>

        {/* Desktop Links & Actions */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-brand-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
             {/* Theme Toggle */}
             <button 
               onClick={toggleTheme}
               className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 transition-colors"
               aria-label="Toggle theme"
             >
               {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
             </button>

             <motion.button
               onClick={onOpenModal}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="px-6 py-2.5 bg-brand-dark dark:bg-white text-white dark:text-brand-dark font-semibold rounded-full text-sm hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
             >
               Book A Call
             </motion.button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
             onClick={toggleTheme}
             className="p-2 rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300"
           >
             {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
           </button>
           <button
            className="text-gray-900 dark:text-white"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-brand-dark border-b border-gray-200 dark:border-white/10 overflow-hidden"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-800 dark:text-gray-300 hover:text-brand-500 dark:hover:text-white"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMobileOpen(false);
                onOpenModal();
              }}
              className="w-full py-3 bg-brand-500 text-white font-bold rounded-lg"
            >
              Book A Call
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
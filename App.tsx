import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Brands } from './components/Brands';
import { Differentiators } from './components/Differentiators';
import { ROICalculator } from './components/ROICalculator';
import { Comparison } from './components/Comparison';
import { Journey } from './components/Journey';
import { Services } from './components/Services';
import { Results } from './components/Results';
import { Testimonials } from './components/Testimonials';
import { YouTubeSection } from './components/YouTubeSection';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Use useEffect to avoid blocking initial paint
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
      const initialTheme = savedTheme || 'dark';
      setTheme(initialTheme);
      
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(initialTheme);
    } catch (e) {
      console.warn("Theme initialization failed", e);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={`relative min-h-screen font-sans transition-colors duration-300`}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-purple-500 origin-left z-[101]"
        style={{ scaleX }}
      />

      <Navbar onOpenModal={openModal} theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero onOpenModal={openModal} />
        <Brands />
        <Differentiators />
        <Comparison />
        <ROICalculator />
        <Journey onOpenModal={openModal} />
        <Services />
        <Results />
        <Testimonials />
        <YouTubeSection />
        <About />
        <FAQ />
        <CTA onOpenModal={openModal} />
      </main>

      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
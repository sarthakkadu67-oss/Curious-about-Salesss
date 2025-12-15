import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ArrowRight, Check } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0F0F11] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5 sticky top-0 z-10 backdrop-blur-md">
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">
                {step === 1 ? "Book Your Strategy Call" : "Call Confirmed!"}
              </h3>
              <button onClick={onClose} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {step === 1 ? (
                <form onSubmit={handleNext} className="space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Fill out the details below and we'll schedule a 15-min discovery call to see if we're a match.
                  </p>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-brand-500 focus:outline-none transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Work Email</label>
                    <input required type="email" placeholder="john@company.com" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-brand-500 focus:outline-none transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Company URL</label>
                    <input required type="url" placeholder="https://company.com" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-brand-500 focus:outline-none transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-600" />
                  </div>
                  <button type="submit" className="w-full mt-4 bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-500/20">
                    Next Step <ArrowRight size={16} />
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={32} />
                  </div>
                  <h4 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">You're on the list!</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our team will review your details and send a calendar invite to <strong>your email</strong> shortly.
                  </p>
                  <button onClick={onClose} className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white font-bold py-3 rounded-lg transition-all">
                    Close
                  </button>
                </div>
              )}
            </div>

            {/* Footer */}
            {step === 1 && (
              <div className="p-4 bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-white/10 flex items-center justify-center gap-2 text-xs text-gray-500">
                <Calendar size={12} /> Spots are limited for this month.
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
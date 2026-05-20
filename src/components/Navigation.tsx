import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-bone/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Desktop Menu Left */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="#collection" className="hover:opacity-60 transition-opacity">Shop</a>
            <a href="#lookbook" className="hover:opacity-60 transition-opacity">Lookbook</a>
            <a href="#story" className="hover:opacity-60 transition-opacity">Atelier</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 -ml-2"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="#" className="font-display font-semibold text-xl tracking-tighter uppercase whitespace-nowrap">
              Pragmatic Atelier
            </a>
          </div>

          {/* Icons Right */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <button className="hidden lg:block hover:opacity-60 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <span className="hidden lg:inline text-sm font-medium mr-2">Login</span>
            </button>
            <button className="relative hover:opacity-60 transition-opacity">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-matte-black text-bone text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-medium">
                0
              </span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bone flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-black/10">
              <span className="font-display font-semibold text-xl tracking-tighter uppercase">Pragmatic Atelier</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 -mr-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col p-8 space-y-8 text-3xl font-display font-medium uppercase tracking-tighter">
              <a href="#collection" onClick={() => setIsMenuOpen(false)}>Shop</a>
              <a href="#lookbook" onClick={() => setIsMenuOpen(false)}>Lookbook</a>
              <a href="#story" onClick={() => setIsMenuOpen(false)}>Atelier Story</a>
              <a href="#bestsellers" onClick={() => setIsMenuOpen(false)}>Essentials</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

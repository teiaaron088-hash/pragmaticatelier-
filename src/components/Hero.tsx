import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image/Video with overlay */}
      <div className="absolute inset-0 z-0 bg-matte-black/20">
        <img 
          src="https://images.unsplash.com/photo-1542840410-3092f99611a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Pragmatic Atelier Campaign"
          className="w-full h-full object-cover object-top filter brightness-[0.85]"
        />
        {/* Grain overlay for cinematic feel */}
        <div className="absolute inset-0 bg-noise opacity-30"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-20">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-bone font-display font-medium text-5xl md:text-7xl lg:text-9xl uppercase tracking-tighter leading-[0.9]"
        >
          Pragmatic <br className="hidden md:block"/> Atelier
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-bone/80 mt-6 text-sm md:text-lg tracking-widest uppercase max-w-xl"
        >
          Quiet luxury. Loud identity. Crafted for modern presence.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a href="#collection" className="bg-bone text-matte-black px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-silver transition-colors">
            Explore Collection
          </a>
          <a href="#lookbook" className="border border-bone/30 text-bone px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-bone/10 transition-colors backdrop-blur-sm">
            View Lookbook
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bone/60"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

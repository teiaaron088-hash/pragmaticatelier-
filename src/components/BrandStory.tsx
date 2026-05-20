import { motion } from 'motion/react';

export default function BrandStory() {
  return (
    <section id="story" className="bg-matte-black text-bone py-32 md:py-48 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 aspect-[4/5] md:aspect-square relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Pragmatic Atelier Craftsmanship"
            className="w-full h-full object-cover filter grayscale opacity-80"
          />
        </motion.div>
        
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-8"
          >
            Crafted with <br/><span className="text-bone/50">intention.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-sm md:text-base text-bone/70 leading-relaxed max-w-lg font-light tracking-wide"
          >
            <p>
              Pragmatic Atelier exists at the intersection of modern luxury and contemporary culture. We believe in garments that speak softly but resonate deeply.
            </p>
            <p>
              Every silhouette is an exploration of form and function. Every fabric is sourced with an uncompromising dedication to quality, ensuring that what you wear today remains definitive tomorrow.
            </p>
            <p>
              This is not fast fashion. This is elevated expression.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <a href="#" className="inline-block uppercase tracking-widest text-xs font-semibold pb-2 border-b border-bone/30 hover:border-bone transition-colors">
              Read the Manifesto
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

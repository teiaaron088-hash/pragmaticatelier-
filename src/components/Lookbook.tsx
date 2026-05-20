import { LOOKBOOK_IMAGES } from '../data';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Lookbook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="lookbook" ref={containerRef} className="py-24 md:py-48 bg-silver/20 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-20 md:mb-32">
        <h2 className="font-display text-4xl md:text-7xl uppercase tracking-tighter">Campaign 01</h2>
        <p className="mt-6 text-charcoal/60 uppercase tracking-widest text-xs md:text-sm">The Architecture of Self</p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <motion.div style={{ y: y1 }} className="w-full md:w-5/12 aspect-[3/4]">
          <img 
            src={LOOKBOOK_IMAGES[0]} 
            alt="Lookbook 1"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="w-full md:w-7/12 flex flex-col gap-8 md:gap-16">
          <motion.div style={{ y: y2 }} className="w-full aspect-[16/9] md:aspect-[4/3] ml-0 md:-ml-24 relative z-10">
            <img 
              src={LOOKBOOK_IMAGES[1]} 
              alt="Lookbook 2"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="w-full md:w-3/4 aspect-[4/5] self-end">
            <img 
              src={LOOKBOOK_IMAGES[2]} 
              alt="Lookbook 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-32 text-center">
        <a href="#" className="inline-block bg-matte-black text-bone px-10 py-5 text-xs font-semibold tracking-widest uppercase hover:bg-charcoal transition-colors">
          View Full Lookbook
        </a>
      </div>
    </section>
  );
}

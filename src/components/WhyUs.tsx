import { motion } from 'motion/react';

const FEATURES = [
  {
    num: "01",
    title: "Premium Materials",
    desc: "Sourced globally, focusing on heavyweight cottons, merino wools, and structured fabrics that age gracefully."
  },
  {
    num: "02",
    title: "Timeless Silhouettes",
    desc: "Designed to exist beyond seasonal trends. Each piece is an exploration of architectural form."
  },
  {
    num: "03",
    title: "Limited Collections",
    desc: "Produced in small batches to reduce waste and ensure uncompromising quality control."
  }
];

export default function WhyUs() {
  return (
    <section className="bg-bone py-24 md:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-matte-black/10 pt-16">
          <div className="lg:col-span-1">
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter">
              The Architecture <br/> of Apparel.
            </h2>
          </div>
          
          {FEATURES.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              <span className="text-xs font-semibold text-charcoal/40 mb-6">{feature.num}</span>
              <h3 className="font-display text-lg uppercase tracking-tight mb-4">{feature.title}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed max-w-sm font-light">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

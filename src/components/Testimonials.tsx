import { motion } from 'motion/react';

const REVIEWS = [
  {
    author: "J. Mercer",
    role: "Creative Director",
    text: "The drape and weight of the essentials collection is unmatched. It feels architectural yet perfectly effortless."
  },
  {
    author: "A. Hughes",
    role: "Architect",
    text: "Finally a brand that understands negative space in design, not just in their campaigns, but in the cut of the garments."
  },
  {
    author: "M. Chen",
    role: "Photographer",
    text: "I live in the heavyweight hoodie. The quality rivals pieces I've bought at three times this price point."
  }
];

export default function Testimonials() {
  return (
    <section className="bg-silver/20 py-24 md:py-32 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16">
          <h2 className="font-display text-2xl md:text-4xl uppercase tracking-tighter">
            Voices of <br/> the Atelier
          </h2>
          <p className="mt-4 md:mt-0 text-charcoal/60 uppercase tracking-widest text-xs">Community Perspectives</p>
        </div>

        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          {REVIEWS.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="min-w-[300px] md:min-w-[400px] bg-bone p-8 snap-center flex flex-col justify-between aspect-square md:aspect-auto md:h-80 border border-matte-black/5"
            >
              <p className="text-lg md:text-xl font-light tracking-wide leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="mt-8 border-t border-matte-black/10 pt-4 flex justify-between items-center">
                <span className="font-medium text-sm md:text-base">{review.author}</span>
                <span className="text-charcoal/50 text-xs tracking-widest uppercase">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FEATURED_PRODUCTS } from '../data';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function FeaturedCollection() {
  return (
    <section id="collection" className="py-24 md:py-32 bg-bone px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter">Atelier Core</h2>
            <p className="mt-4 text-charcoal/70 uppercase tracking-widest text-xs md:text-sm">Modern Essentials</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest font-semibold hover:opacity-60 transition-opacity">
            Shop All <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {FEATURED_PRODUCTS.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-silver/30 mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                />
                <img 
                  src={product.hoverImage} 
                  alt={`${product.name} detail`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 transform scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pt-12 bg-gradient-to-t from-black/50 to-transparent">
                  <button className="w-full bg-bone text-matte-black py-3 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                    Quick Add
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-sm md:text-base uppercase tracking-tight">{product.name}</h3>
                  <p className="text-charcoal/60 text-xs mt-1 uppercase tracking-wider">{product.category}</p>
                </div>
                <span className="font-medium text-sm md:text-base">${product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
          <a href="#" className="flex items-center gap-2 text-sm uppercase tracking-widest font-semibold pb-1 border-b border-matte-black">
            Shop All <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

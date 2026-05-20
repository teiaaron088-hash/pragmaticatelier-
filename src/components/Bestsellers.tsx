import { FEATURED_PRODUCTS } from '../data';
import { motion } from 'motion/react';
export default function Bestsellers() {
  return (
    <section id="bestsellers" className="py-24 bg-bone px-6 lg:px-12 border-t border-matte-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:flex justify-between items-end border-b border-matte-black/10 pb-6">
          <div>
            <h2 className="font-display text-2xl md:text-4xl uppercase tracking-tighter">Most Wanted</h2>
            <p className="mt-2 text-charcoal/60 uppercase tracking-widest text-xs">Curated by the community</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-xs font-semibold uppercase tracking-widest hover:opacity-60 transition-opacity">
            View All
          </a>
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          {FEATURED_PRODUCTS.slice().reverse().map((product, index) => (
            <div 
              key={product.id + 'bs'}
              className="min-w-[280px] md:min-w-[320px] snap-start group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-silver/20 mb-6">
                 <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-matte-black text-bone text-[10px] uppercase font-bold tracking-widest px-2 py-1">Trending</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-sm md:text-base tracking-tight">{product.name}</h3>
                  <p className="text-charcoal/60 text-xs mt-1">{product.category}</p>
                </div>
                <span className="font-medium text-sm md:text-base">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Newsletter() {
  return (
    <section className="bg-bone py-32 px-6 lg:px-12 border-t border-matte-black/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter mb-6">Join the Atelier</h2>
        <p className="text-charcoal/70 text-sm tracking-wide mb-10 max-w-md mx-auto">
          Access future drops, limited releases, and editorial updates before anyone else.
        </p>
        
        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="flex-1 bg-transparent border-b border-matte-black/30 pb-3 px-2 text-matte-black placeholder:text-matte-black/40 focus:outline-none focus:border-matte-black transition-colors rounded-none"
            required
          />
          <button 
            type="submit" 
            className="bg-matte-black text-bone px-8 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-charcoal transition-colors whitespace-nowrap mt-4 md:mt-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

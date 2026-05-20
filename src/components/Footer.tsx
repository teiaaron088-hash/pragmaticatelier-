export default function Footer() {
  return (
    <footer className="bg-matte-black text-bone pt-24 pb-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
        
        <div className="flex flex-col">
          <span className="font-display font-semibold text-2xl tracking-tighter uppercase mb-6">Pragmatic Atelier</span>
          <p className="text-bone/50 text-xs tracking-wide leading-relaxed max-w-xs">
            Contemporary fashion for the culturally aware. Elevated essentials designed with intention and built for modern presence.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-bone/60 mb-2">Shop</h4>
          <a href="#" className="text-sm text-bone/80 hover:text-bone transition-colors">New Arrivals</a>
          <a href="#" className="text-sm text-bone/80 hover:text-bone transition-colors">Essentials</a>
          <a href="#" className="text-sm text-bone/80 hover:text-bone transition-colors">Outerwear</a>
          <a href="#" className="text-sm text-bone/80 hover:text-bone transition-colors">Accessories</a>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-bone/60 mb-2">Support</h4>
          <a href="#" className="text-sm text-bone/80 hover:text-bone transition-colors">Client Services</a>
          <a href="#" className="text-sm text-bone/80 hover:text-bone transition-colors">Shipping & Returns</a>
          <a href="#" className="text-sm text-bone/80 hover:text-bone transition-colors">Size Guide</a>
          <a href="#" className="text-sm text-bone/80 hover:text-bone transition-colors">Contact Us</a>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-bone/60 mb-2">Social</h4>
          <a href="#" className="text-sm text-bone/80 hover:text-bone transition-colors">Instagram</a>
          <a href="#" className="text-sm text-bone/80 hover:text-bone transition-colors">TikTok</a>
          <a href="#" className="text-sm text-bone/80 hover:text-bone transition-colors">Pinterest</a>
          <a href="#" className="text-sm text-bone/80 hover:text-bone transition-colors">Journal</a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-bone/10 text-bone/40 text-xs tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Pragmatic Atelier. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-bone transition-colors">Privacy</a>
          <a href="#" className="hover:text-bone transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}

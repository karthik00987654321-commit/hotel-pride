import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer id="location" className="bg-[#1a1a1a] text-white pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#be863c]">PRIDE</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              An upmarket luxury hotel located near MG Road Bengaluru, with well-designed decor portraying grandeur.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-[#be863c] transition-colors"><Facebook size={16} /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-[#be863c] transition-colors"><Instagram size={16} /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-[#be863c] transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-[#be863c] transition-colors"><Youtube size={16} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-white/30">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#be863c] shrink-0 mt-1" />
                <span className="text-sm text-white/70">93, Richmond Rd, Langford Gardens, Bengaluru, Karnataka 560025, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#be863c] shrink-0" />
                <span className="text-sm text-white/70">+91 80 4348 4348</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#be863c] shrink-0" />
                <span className="text-sm text-white/70">reservations.bglr@pridehotel.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-white/30">Quick Links</h4>
            <ul className="space-y-3">
              {['Our Hotels', 'Offers', 'Weddings', 'Dining', 'Careers', 'Investor Relations'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/70 hover:text-[#be863c] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-white/30">Newsletter</h4>
            <p className="text-sm text-white/50 mb-6">Subscribe to receive our latest offers and news.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#be863c] w-full"
              />
              <button className="bg-[#be863c] px-6 py-3 text-xs uppercase tracking-widest font-bold">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-medium text-white/30">
          <p>© 2026 Pride Hotels Limited. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

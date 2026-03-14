import { motion } from "motion/react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div id="hotel-logo" className="flex-shrink-0 flex items-center">
            <span className="font-serif text-2xl font-bold tracking-tighter text-[#be863c]">PRIDE</span>
            <span className="ml-2 text-xs uppercase tracking-[0.2em] font-medium hidden sm:block">Hotel Bengaluru</span>
          </div>

          <nav id="desktop-nav" className="hidden md:flex space-x-8">
            {['Rooms', 'Dining', 'Events', 'Spa', 'Location'].map((item) => (
              <a
                key={item}
                id={`nav-link-${item.toLowerCase()}`}
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-widest font-medium hover:text-[#be863c] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div id="header-actions" className="hidden md:flex items-center space-x-4">
            <a id="contact-phone" href="tel:+918043484348" className="p-2 hover:text-[#be863c] transition-colors">
              <Phone size={18} />
            </a>
            <button id="book-now-btn-header" className="bg-[#be863c] text-white px-6 py-2.5 text-xs uppercase tracking-widest font-bold rounded-none hover:bg-[#a67534] transition-colors">
              Book Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button id="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-black/5"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Rooms', 'Dining', 'Events', 'Spa', 'Location'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-4 text-base font-medium uppercase tracking-widest border-b border-black/5 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="p-4">
              <button className="w-full bg-[#be863c] text-white px-6 py-4 text-sm uppercase tracking-widest font-bold">
                Book Now
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

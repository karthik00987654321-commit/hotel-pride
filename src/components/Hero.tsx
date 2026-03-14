import { motion } from "motion/react";
import { Calendar, Users, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_215,w_4288,h_2412,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/pride-hotel-bengaluru/Hotel_Exterior_Bldg_qzx0kh"
          alt="Pride Hotel Bengaluru Exterior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 uppercase tracking-[0.4em] text-sm font-medium mb-4"
        >
          Welcome to Pride Premier
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight"
        >
          Where Convenience <br /> Meets <span className="italic">Luxury</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="bg-[#be863c] text-white px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-[#a67534] transition-all group flex items-center">
            Explore Rooms
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all">
            Virtual Tour
          </button>
        </motion.div>
      </div>

      {/* Booking Bar Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-0 left-0 w-full p-4 md:p-8 z-20"
      >
        <div id="booking-bar" className="max-w-6xl mx-auto bg-white shadow-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <label htmlFor="check-in" className="text-[10px] uppercase tracking-widest font-bold text-black/50 flex items-center">
              <Calendar size={12} className="mr-2" /> Check In
            </label>
            <input id="check-in" type="date" className="w-full border-b border-black/10 py-2 focus:outline-none focus:border-[#be863c] text-sm" />
          </div>
          <div className="space-y-2">
            <label htmlFor="check-out" className="text-[10px] uppercase tracking-widest font-bold text-black/50 flex items-center">
              <Calendar size={12} className="mr-2" /> Check Out
            </label>
            <input id="check-out" type="date" className="w-full border-b border-black/10 py-2 focus:outline-none focus:border-[#be863c] text-sm" />
          </div>
          <div className="space-y-2">
            <label htmlFor="guests-select" className="text-[10px] uppercase tracking-widest font-bold text-black/50 flex items-center">
              <Users size={12} className="mr-2" /> Guests
            </label>
            <select id="guests-select" className="w-full border-b border-black/10 py-2 focus:outline-none focus:border-[#be863c] text-sm bg-transparent">
              <option>1 Adult, 0 Children</option>
              <option>2 Adults, 0 Children</option>
              <option>2 Adults, 1 Child</option>
              <option>3 Adults, 0 Children</option>
            </select>
          </div>
          <div className="flex items-end">
            <button id="check-availability-btn" className="w-full bg-black text-white py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#be863c] transition-colors">
              Check Availability
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from "motion/react";

export default function Events() {
  return (
    <section id="events" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <img
              src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3190/x_0,y_189,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/pride-hotel-bengaluru/Imperial_-_Theatre_Setup_dpslmr"
              alt="Imperial Hall Setup"
              className="w-full h-auto shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="order-1 lg:order-2">
            <p className="text-[#be863c] text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Banquets & Conferences</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 italic">Meetings & Events</h2>
            <p className="text-black/60 leading-relaxed mb-8">
              We have a variety of conference and banquet halls at Pride - one of the best hotels in Richmond Road Bengaluru. 
              We provide you with the ultimate privacy and luxurious amenities to enjoy on your special day.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Crystal Hall', 'Opal Hall', 'Imperial Hall', 'Royal Hall', 'Senate Hall'].map((hall) => (
                <div key={hall} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#be863c] rounded-full" />
                  <span className="text-xs uppercase tracking-widest font-bold">{hall}</span>
                </div>
              ))}
            </div>
            <button className="bg-black text-white px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#be863c] transition-all">
              Request a Proposal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";

export default function Spa() {
  return (
    <section id="spa" className="py-24 px-4 bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#be863c] text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Wellness & Rejuvenation</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">Aadhya Wellness Spa</h2>
            <p className="text-black/60 leading-relaxed mb-8 italic">
              "Relax and Pamper Yourself"
            </p>
            <p className="text-black/60 leading-relaxed mb-8">
              Pride Hotel's spa in Bengaluru offers an extensive range of treatment therapies inspired by Swedish and Thai traditions 
              of well-being that imparts a sense of relaxation in luxury. Select from pain soothing therapies to manicure and pedicure.
            </p>
            <button className="text-xs uppercase tracking-widest font-bold border-b-2 border-[#be863c] pb-1 hover:text-[#be863c] transition-colors">
              Explore Spa Menu
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3323/x_0,y_512,w_4997,h_2811,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/pride-hotel-bengaluru/Spa_sxcry5"
              alt="Spa Treatment Room"
              className="w-full h-auto shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-8 -right-8 w-32 h-32 border-t-2 border-r-2 border-[#be863c] hidden md:block" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-b-2 border-l-2 border-[#be863c] hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

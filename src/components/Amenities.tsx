import { motion } from "motion/react";
import { Utensils, Trees, Train, Dumbbell, Bath } from "lucide-react";

const amenities = [
  { icon: Utensils, name: "Punjabi & North Indian Buffet" },
  { icon: Trees, name: "2.6 km Drive to Cubbon Park" },
  { icon: Train, name: "3.5 km from MG Road Metro Station" },
  { icon: Dumbbell, name: "Health Club & Gym" },
  { icon: Bath, name: "Bathtub (in Suite rooms)" }
];

export default function Amenities() {
  return (
    <section className="py-24 px-4 bg-[#1a1a1a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">World-Class <br /><span className="text-[#be863c]">Amenities</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {amenities.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="p-3 border border-white/10 rounded-full group-hover:border-[#be863c] group-hover:text-[#be863c] transition-colors">
                    <item.icon size={20} />
                  </div>
                  <span className="text-sm uppercase tracking-widest font-medium text-white/70 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-full border border-white/5 p-8 flex items-center justify-center"
            >
              <div className="aspect-square rounded-full border border-white/10 p-8 flex items-center justify-center">
                <img
                  src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3337/x_0,y_523,w_4996,h_2814,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/pride-hotel-bengaluru/Health_Club_-_Gym_etduul"
                  alt="Gym"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <div className="absolute -bottom-4 -left-4 bg-[#be863c] p-8 hidden md:block">
              <p className="text-4xl font-serif">4-Star</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold">Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

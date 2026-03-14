import { motion } from "motion/react";

const venues = [
  {
    name: "Café Treat",
    type: "All Day Dining",
    description: "Relish your afternoon tea in serenity. We offer a beautiful and comfortable dining space with mesmerizing culinary art.",
    image: "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3337/x_0,y_262,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_550,f_auto,c_fit/pride-hotel-bengaluru/Cafe_Treat_-_All_Day_Dining_gg71cy"
  },
  {
    name: "Puran Da Dhaba",
    type: "Rooftop Restaurant",
    description: "Enjoy your dinner with mouth-watering traditional cuisine at our rooftop restaurant, offering authentic local experiences.",
    image: "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3215/x_0,y_201,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_550,f_auto,c_fit/pride-hotel-bengaluru/Resto_Bar_-_Sitting_Area_f0ohui"
  },
  {
    name: "Fuel Bar",
    type: "Resto Bar",
    description: "Offers an à la carte selection of appetizers, desserts as well as classic signature cocktails in an elegant atmosphere.",
    image: "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3337/x_0,y_262,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_550,f_auto,c_fit/pride-hotel-bengaluru/Fuel_-_Resto_Bar_ujnzyp"
  }
];

export default function Dining() {
  return (
    <section id="dining" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Fine Dining Experiences</h2>
            <p className="text-black/60 leading-relaxed">
              Mesmerizing culinary art and elegant music await you at our Bengaluru hotel. 
              From traditional rooftop treats to sophisticated resto-bars.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <button className="text-xs uppercase tracking-widest font-bold border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition-all">
              View All Menus
            </button>
          </div>
        </div>

        <div id="dining-grid" className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.name}
              id={`dining-venue-${venue.name.toLowerCase().replace(/\s+/g, '-')}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="aspect-[4/5] overflow-hidden mb-8">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[#be863c] text-[10px] uppercase tracking-[0.3em] font-bold mb-2">{venue.type}</p>
              <h3 className="font-serif text-3xl mb-4">{venue.name}</h3>
              <p className="text-sm text-black/60 leading-relaxed px-4">
                {venue.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";

const rooms = [
  {
    title: "Suites",
    description: "Step into our 520 sq. ft. Suite equipped with a separate living area, in-room safe, king size bed, and more, perfect for 3 guests.",
    image: "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3035/x_0,y_213,w_5000,h_2815,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/pride-hotel-bengaluru/Suite_-_Bedroom_wferxy",
    price: "₹8,500"
  },
  {
    title: "Superior King Room",
    description: "Experience elegance and comfort with our Superior King Room equipped with king bed, a wardrobe, and more, all for 3 guests.",
    image: "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3272/x_0,y_460,w_5000,h_2810,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/pride-hotel-bengaluru/Superior_Room_anr70e",
    price: "₹6,200"
  },
  {
    title: "Deluxe Twin Room",
    description: "Explore our Deluxe Twin Room spanning across 273 sq. ft., which is equipped with a minibar and a twin bed. Perfect for 3 individuals.",
    image: "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3271/x_0,y_229,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/pride-premier-bengaluru/hotel-superior-twin-room",
    price: "₹5,500"
  }
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 px-4 bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Exquisite Accommodations</h2>
          <div className="w-20 h-1 bg-[#be863c] mx-auto mb-6" />
          <p className="text-black/60 max-w-2xl mx-auto uppercase tracking-widest text-xs font-medium">
            Timeless luxury with well-decorated interiors and elegant furniture.
          </p>
        </div>

        <div id="rooms-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              id={`room-card-${room.title.toLowerCase().replace(/\s+/g, '-')}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="lux-card group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 text-xs font-bold tracking-widest uppercase">
                  From {room.price}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl mb-4">{room.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed mb-6">
                  {room.description}
                </p>
                <button className="text-xs uppercase tracking-widest font-bold border-b-2 border-[#be863c] pb-1 hover:text-[#be863c] transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

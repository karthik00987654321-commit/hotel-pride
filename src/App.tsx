/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import Dining from "./components/Dining";
import Amenities from "./components/Amenities";
import Events from "./components/Events";
import Spa from "./components/Spa";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="font-sans antialiased">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#be863c] origin-left z-[60]"
        style={{ scaleX }}
      />

      <Header />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Rooms />
          <Dining />
          <Amenities />
          <Events />
          <Spa />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

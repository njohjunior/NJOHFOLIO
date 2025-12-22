import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import pricingData from "../datas/PricingDatas";
import { FaClock, FaTag, FaCheckCircle } from "react-icons/fa";

const MotionDiv = motion.div;

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding w-full bg-slate-900/10">
      <MotionDiv
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 variants={fadeIn("up", 0.2)} className="text-white mb-6">
            Tarifs & <span className="text-primary">Estimations</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Une transparence totale pour vos projets digitaux. Chaque tarif est
            une base ajustable selon vos besoins spécifiques.
          </motion.p>
        </div>

        {/* Pricing Mobile-Responsive Container */}
        <div className="overflow-x-auto pb-4 custom-scrollbar">
          <div className="min-w-[900px] bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-slate-800/50 p-8 border-b border-slate-700">
              <div className="flex items-center gap-4 text-white font-bold text-xl md:text-2xl font-heading">
                <FaCheckCircle className="text-primary shrink-0" />
                <span>Service</span>
              </div>
              <div className="flex items-center gap-4 text-white font-bold text-xl md:text-2xl font-heading">
                <FaTag className="text-primary shrink-0" />
                <span>Prix fixe</span>
              </div>
              <div className="flex items-center gap-4 text-white font-bold text-xl md:text-2xl font-heading">
                <FaClock className="text-primary shrink-0" />
                <span>Délai prévu</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-800">
              {pricingData.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeIn("up", index * 0.1)}
                  className="grid grid-cols-3 p-10 hover:bg-primary/5 transition-all duration-500 items-center group"
                >
                  <div className="space-y-3">
                    <h3 className="text-white group-hover:text-primary transition-colors">
                      {item.type}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.features.slice(0, 3).map((feature, i) => (
                        <span
                          key={i}
                          className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest"
                        >
                          • {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-4xl md:text-5xl font-heading font-black text-white tracking-tighter">
                    <span className="text-primary text-2xl md:text-3xl mr-1">
                      $
                    </span>
                    {item.price}
                  </div>

                  <div className="text-gray-300 font-bold text-xl md:text-2xl">
                    {item.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Note */}
        <p className="mt-8 text-center text-gray-500 text-sm md:hidden italic">
          * Faites glisser horizontalement pour voir tout le tableau.
        </p>
      </MotionDiv>
    </section>
  );
}

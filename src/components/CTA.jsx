import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";

const MotionDiv = motion.div;
const MotionLink = motion.create(Link);

export default function CTA() {
  return (
    <section className="section-padding w-full relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <MotionDiv
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto relative z-10"
      >
        <div className="max-w-5xl mx-auto bg-slate-900/40 border border-slate-800 p-12 md:p-24 rounded-4xl backdrop-blur-xl shadow-2xl relative text-center">
          <motion.h2 variants={fadeIn("up", 0.2)} className="text-white mb-8">
            Prêt à donner vie à{" "}
            <span className="text-primary">votre projet ?</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Que vous ayez une idée précise ou que vous partiez de zéro, je suis
            là pour vous accompagner dans la création de votre solution digitale
            unique.
          </motion.p>

          <MotionLink
            to="/contact"
            variants={fadeIn("up", 0.4)}
            className="inline-flex items-center px-8 py-2 md:px-12 md:py-5 bg-primary text-white text-base md:text-xl font-bold rounded-full hover:bg-primary/80 transition-all duration-300 shadow-xl shadow-primary/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Travaillons ensemble
          </MotionLink>
        </div>
      </MotionDiv>
    </section>
  );
}

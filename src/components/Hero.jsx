import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/animations";

export default function Hero() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative min-h-[calc(100vh-80px)] xl:min-h-[calc(100vh-120px)] w-full flex flex-col md:flex-row items-center justify-center mx-auto px-4 py-12 md:py-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-80" />
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-5xl">
        <motion.div
          variants={textVariant(0.1)}
          className="bg-orange-700/10 px-4 py-2 rounded-full border border-orange-700/20"
        >
          <span className="text-primary font-heading font-semibold tracking-widest text-sm md:text-[12px]">
            NJOH SIMPLICE JUNIOR
          </span>
        </motion.div>

        <motion.h1
          variants={fadeIn("up", 0.2)}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
        >
          Je transforme vos idées en{" "}
          <span className="text-primary">produits rentables</span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.3)}
          className="text-gray-400 text-lg md:text-xl max-w-2xl"
        >
          De la conception UI/UX au déploiement haute performance. J'accompagne
          les PME et Startups internationales vers l'excellence digitale.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.4)}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <PrimaryButton to="/projects">Mes projets</PrimaryButton>
          <SecondaryButton to="/contact">Contactez-moi</SecondaryButton>
        </motion.div>

        {/* social media */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          className="flex items-center gap-6 pt-8"
        >
          {[
            { icon: FaGithub, href: "https://github.com/njohjunior" },
            {
              icon: FaLinkedin,
              href: "https://linkedin.com/in/njoh-simplice-junior",
            },
            {
              icon: FaInstagram,
              href: "https://instagram.com/njoh_simplice",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <social.icon />
            </a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

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
      className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center mx-auto px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-5xl">
        <motion.div
          variants={textVariant(0.1)}
          className="bg-primary/10 px-6 py-2 rounded-full border border-primary/20 backdrop-blur-md"
        >
          <span className="text-primary font-heading font-bold tracking-[0.2em] text-[10px] md:text-xs">
            NJOH SIMPLICE JUNIOR
          </span>
        </motion.div>

        <motion.h1
          variants={fadeIn("up", 0.2)}
          className="text-white font-bold tracking-tighter"
        >
          Je transforme vos idées en{" "}
          <span className="text-primary">produits digitaux </span>rentables
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.3)}
          className="text-gray-400 max-w-3xl"
        >
          De la conception UI/UX au déploiement haute performance. J'accompagne
          les PME et Startups internationales vers l'excellence digitale.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.4)}
          className="flex flex-wrap items-center justify-center gap-6 pt-6"
        >
          <PrimaryButton to="/projects" className="px-10 py-4 text-lg">
            Mes projets
          </PrimaryButton>
          <SecondaryButton to="/contact" className="px-10 py-4 text-lg">
            Contactez-moi
          </SecondaryButton>
        </motion.div>

        {/* social media */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          className="flex items-center gap-6 pt-8"
        >
          {[
            {
              icon: FaGithub,
              href: "https://github.com/njohjunior",
              name: "GitHub",
            },
            {
              icon: FaLinkedin,
              href: "https://linkedin.com/in/njoh-simplice-junior",
              name: "LinkedIn",
            },
            {
              icon: FaInstagram,
              href: "https://instagram.com/njoh_simplice",
              name: "Instagram",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label={social.name}
            >
              <social.icon />
            </a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";

const MotionDiv = motion.div;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: "Accueil", link: "/" },
    { name: "Projets", link: "/projects" },
    { name: "Outils", link: "/tools" },
    { name: "Ressources", link: "/ressources" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/njohjunior", name: "GitHub" },
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
  ];

  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto">
        <MotionDiv
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
        >
          {/* Column 1: Brand */}
          <MotionDiv variants={fadeIn("up", 0.1)} className="space-y-8">
            <NavLink
              to="/"
              className="font-heading font-bold text-3xl tracking-tighter hover:text-primary transition-colors duration-300"
            >
              <span className="text-primary">{"< "}</span>
              NJOHFOLIO
              <span className="text-primary">{" />"}</span>
            </NavLink>
            <p className="text-gray-400 pt-2 text-base leading-relaxed max-w-xs">
              Créateur d'expériences digitales innovantes. Je transforme vos
              idées en produits numériques simples, performants et esthétiques.
            </p>
          </MotionDiv>

          {/* Column 2: Navigation */}
          <MotionDiv variants={fadeIn("up", 0.2)} className="space-y-8">
            <h3 className="text-white font-heading font-bold text-xs uppercase tracking-[0.3em]">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.link}
                    className="text-gray-500 hover:text-primary transition-colors duration-300 text-sm font-medium"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* Column 3: Socials */}
          <MotionDiv variants={fadeIn("up", 0.3)} className="space-y-8">
            <h3 className="text-white font-heading font-bold text-xs uppercase tracking-[0.3em]">
              Suivez-moi
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 transform hover:-translate-y-2"
                  aria-label={social.name}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </MotionDiv>

          {/* Column 4: Contact */}
          <MotionDiv variants={fadeIn("up", 0.4)} className="space-y-8">
            <h3 className="text-white font-heading font-bold text-xs uppercase tracking-[0.3em]">
              Contact
            </h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-gray-400 text-sm font-medium">
                <FaPhone className="text-primary text-base shrink-0" />
                <a
                  href="tel:+237652025901"
                  className="hover:text-primary transition-colors"
                >
                  (+237) 652 02 59 01
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-400 text-sm font-medium">
                <FaEnvelope className="text-primary text-base shrink-0" />
                <a
                  href="mailto:njohjunior4@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  njohjunior4@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-400 text-sm font-medium">
                <FaMapMarkerAlt className="text-primary text-base shrink-0" />
                <span>Yaoundé, Cameroun</span>
              </li>
            </ul>
          </MotionDiv>
        </MotionDiv>

        {/* Bottom Bar */}
        <MotionDiv
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-500 text-xs font-medium text-center md:text-left">
            © {currentYear} NJOH SIMPLICE JUNIOR ❤️
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-gray-500 hover:text-white text-[10px] md:text-xs uppercase tracking-widest transition-colors font-bold"
            >
              Confidentialité
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-[10px] md:text-xs uppercase tracking-widest transition-colors font-bold"
            >
              Mentions Légales
            </a>
          </div>
        </MotionDiv>
      </div>
    </footer>
  );
}

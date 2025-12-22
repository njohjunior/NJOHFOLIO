import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
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
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Column 1: Brand */}
          <MotionDiv variants={fadeIn("up", 0.1)} className="space-y-6">
            <NavLink to="/" className="font-heading font-bold text-2xl">
              <span className="text-primary">{"< "}</span>
              NJOHFOLIO
              <span className="text-primary">{" />"}</span>
            </NavLink>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Créateur d'expériences digitales innovantes. Je transforme vos
              idées complexes en produits numériques simples, performants et
              esthétiques.
            </p>
          </MotionDiv>

          {/* Column 2: Navigation */}
          <MotionDiv variants={fadeIn("up", 0.2)} className="space-y-6">
            <h4 className="text-white font-heading font-semibold text-lg">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.link}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* Column 3: Socials */}
          <MotionDiv variants={fadeIn("up", 0.3)} className="space-y-6">
            <h4 className="text-white font-heading font-semibold text-lg">
              Suivez-moi
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </MotionDiv>

          {/* Column 4: Contact */}
          <MotionDiv variants={fadeIn("up", 0.4)} className="space-y-6">
            <h4 className="text-white font-heading font-semibold text-lg">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaEnvelope className="text-primary text-base shrink-0" />
                <a
                  href="mailto:njohjunior4@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  njohjunior4@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
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
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {currentYear} NJOH SIMPLICE JUNIOR. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-white text-xs transition-colors"
            >
              Politique de confidentialité
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-xs transition-colors"
            >
              Mentions légales
            </a>
          </div>
        </MotionDiv>
      </div>
    </footer>
  );
}

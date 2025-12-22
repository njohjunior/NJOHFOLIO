import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { navVariants } from "../utils/animations";

// Handle motion usage for linter
const MotionHeader = motion.header;
const MotionDiv = motion.div;
const MotionSpan = motion.span;

export default function Header() {
  const navItems = [
    { name: "Accueil", link: "/" },
    { name: "Projets", link: "/projects" },
    { name: "Outils", link: "/tools" },
    { name: "Ressources", link: "/ressources" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <MotionHeader
      variants={navVariants}
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink
            to="/"
            className="font-heading font-bold text-xl md:text-2xl hover:text-primary transition-colors duration-300 group"
          >
            <MotionSpan
              className="text-primary inline-block"
              whileHover={{ x: -3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {"< "}
            </MotionSpan>
            <span className="group-hover:tracking-wider transition-all duration-300">
              NJOHFOLIO
            </span>
            <MotionSpan
              className="text-primary inline-block"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {" />"}
            </MotionSpan>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-sans">
            <ul className="text-white font-medium flex gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.link}
                  end={item.link === "/"}
                  className={({ isActive }) =>
                    `transition-all duration-300 hover:text-primary ${
                      isActive
                        ? "text-primary underline underline-offset-8"
                        : "text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>

            <NavLink to="/contact">
              <PrimaryButton className="hidden lg:block text-sm hover:scale-95 transition-all duration-300">
                Contactez-moi
              </PrimaryButton>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl text-white hover:text-primary transition-colors focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Card & Backdrop */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop Overlay */}
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              />

              <MotionDiv
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl mt-4 mb-4 mx-2 relative z-50"
              >
                <div className="px-6 py-8 space-y-6">
                  <ul className="flex flex-col gap-6">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        <NavLink
                          to={item.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            `text-lg font-medium transition-colors duration-300 block ${
                              isActive
                                ? "text-primary"
                                : "text-white hover:text-primary"
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  <div onClick={() => setIsMobileMenuOpen(false)}>
                    <NavLink to="/contact">
                      <PrimaryButton className="w-full text-lg py-4">
                        Contactez-moi
                      </PrimaryButton>
                    </NavLink>
                  </div>
                </div>
              </MotionDiv>
            </>
          )}
        </AnimatePresence>
      </nav>
    </MotionHeader>
  );
}

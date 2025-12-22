import ProjectCard from "./ProjectCard";
import projectDatas from "../datas/ProjectsDatas";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/animations";
import { fadeIn } from "../utils/animations";

import { Link } from "react-router-dom";

const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionP = motion.p;
const MotionLink = motion.create(Link);

export default function ProjectHome() {
  return (
    <section id="projets" className="section-padding w-full bg-slate-900/30">
      <MotionDiv
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto"
      >
        {/* Section Title */}
        <div className="text-center mb-20">
          <MotionH2 variants={textVariant(0.2)} className="text-white mb-6">
            Mes <span className="text-primary">Projets</span>
          </MotionH2>
          <MotionP
            variants={fadeIn("up", 0.3)}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Découvrez une sélection de mes réalisations les plus marquantes et
            récentes.
          </MotionP>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectDatas.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <MotionLink
            to="/projects"
            variants={fadeIn("up", 0.5)}
            className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/80 transition-all duration-300 shadow-lg shadow-primary/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir tous les projets
          </MotionLink>
        </div>
      </MotionDiv>
    </section>
  );
}

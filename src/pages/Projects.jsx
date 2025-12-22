import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import projectDatas from "../datas/ProjectsDatas";
import CTA from "../components/CTA";

const MotionDiv = motion.div;

export default function Projects() {
  const [filter, setFilter] = useState("Tous");
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ["Tous", ...new Set(projectDatas.map((p) => p.type))];

  const filteredProjects =
    filter === "Tous"
      ? projectDatas
      : projectDatas.filter((p) => p.type === filter);

  const projectsToDisplay = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  // Reset visible count when filter changes
  const handleFilterChange = (cat) => {
    setFilter(cat);
    setVisibleCount(6);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <PageHero
        title="Mes Projets"
        description="Une sélection de mes récentes réalisations et expériences professionnelles."
      />

      <div className="container mx-auto px-4 py-12">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === cat
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                  : "bg-slate-900/50 border-slate-800 text-slate-400 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <MotionDiv
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projectsToDisplay.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </MotionDiv>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-slate-900/50 border border-slate-800 text-white rounded-full font-bold hover:border-primary/50 hover:text-primary transition-all duration-300 backdrop-blur-sm"
            >
              Charger plus de projets
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              Aucun projet trouvé dans cette catégorie.
            </p>
          </div>
        )}
      </div>
      <CTA />
    </div>
  );
}

import React from "react";
import PageHero from "../components/PageHero";

export default function Projects() {
  return (
    <div className="bg-black text-white">
      <PageHero
        title="Mes Projets"
        description="Une sélection de mes récentes réalisations et expériences professionnelles."
      />
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-gray-400">
          Section projets en cours de préparation...
        </p>
      </div>
    </div>
  );
}

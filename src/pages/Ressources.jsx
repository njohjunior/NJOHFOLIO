import React from "react";
import PageHero from "../components/PageHero";

export default function Ressources() {
  return (
    <div className="bg-black text-white">
      <PageHero
        title="Ressources"
        description="Partage de connaissances, guides techniques et bonnes pratiques pour les développeurs."
      />
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-gray-400">
          Section ressources en cours de préparation...
        </p>
      </div>
    </div>
  );
}

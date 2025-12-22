import React from "react";
import PageHero from "../components/PageHero";

export default function Tools() {
  return (
    <div className="bg-black text-white">
      <PageHero
        title="Mes Outils"
        description="Une collection de petits outils utilitaires que j'ai créés (Générateur de bannière LinkedIn, etc.)."
      />
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-gray-400">
          Section outils en cours de préparation...
        </p>
      </div>
    </div>
  );
}

import Hero from "../components/Hero";
import ProjectHome from "../components/ProjectHome";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <ProjectHome />
      <Pricing />
      <CTA />
    </div>
  );
}

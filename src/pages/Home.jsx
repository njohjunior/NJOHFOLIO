import Hero from "../components/Hero";
import ProjectHome from "../components/ProjectHome";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Stack from "../components/Stack";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Stack />
      <ProjectHome />
      <Pricing />
      <CTA />
    </div>
  );
}

import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "../utils/animations";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

export default function PageHero({ title, description }) {
  return (
    <MotionDiv
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative container mx-auto flex flex-col items-center justify-center h-[60vh] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6">
        <MotionH1 variants={textVariant(0.1)} className="text-primary">
          {title}
        </MotionH1>
        <MotionP
          variants={fadeIn("up", 0.2)}
          className="text-gray-400 text-center max-w-3xl"
        >
          {description}
        </MotionP>
      </div>
    </MotionDiv>
  );
}

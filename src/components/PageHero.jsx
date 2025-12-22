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
      className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-[calc(70vh-80px)] xl:h-[calc(60vh-80px)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <MotionH1
          variants={textVariant(0.1)}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
        >
          {title}
        </MotionH1>
        <MotionP
          variants={fadeIn("up", 0.2)}
          className="text-gray-400 text-center text-lg md:text-xl pt-3 max-w-2xl"
        >
          {description}
        </MotionP>
      </div>
    </MotionDiv>
  );
}

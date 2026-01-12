import { motion } from "framer-motion";
import ReactIcon from "/assets/images/stacks/React.webp";
import LaravelIcon from "/assets/images/stacks/Laravel.webp";
import DjangoIcon from "/assets/images/stacks/Django.webp";
import WordpressIcon from "/assets/images/stacks/Wordpress.webp";
import FramerIcon from "/assets/images/stacks/Framer.webp";
import TailwindCSSIcon from "/assets/images/stacks/Tailwind.webp";
import BootstrapIcon from "/assets/images/stacks/Bootstrap.webp";
import MySQLIcon from "/assets/images/stacks/MySQL.webp";
import PostgreSQLIcon from "/assets/images/stacks/PostgreSQL.webp";
import FigmaIcon from "/assets/images/stacks/Figma.webp";

export default function Stack() {
  const stack = [
    { name: "React JS", image: ReactIcon },
    { name: "Laravel", image: LaravelIcon },
    { name: "Django", image: DjangoIcon },
    { name: "Wordpress", image: WordpressIcon },
    { name: "Framer", image: FramerIcon },
    { name: "Tailwind CSS", image: TailwindCSSIcon },
    { name: "Bootstrap", image: BootstrapIcon },
    { name: "MySQL", image: MySQLIcon },
    { name: "PostgreSQL", image: PostgreSQLIcon },
    { name: "Figma", image: FigmaIcon },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white mb-6"
        >
          Mes <span className="text-primary">stacks</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Découvrez mes compétences techniques et les technologies que je
          maîtrise pour donner vie à vos projets.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
      >
        {stack.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              translateY: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            className="group flex flex-col items-center p-2 rounded-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <img
                src={item.image}
                alt={`${item.name} logo`}
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

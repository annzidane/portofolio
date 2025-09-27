"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.4);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[56rem] scroll-mt-28 text-center sm:mb-40 relative"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 font-medium text-gray-700 shadow-md hover:shadow-lg hover:bg-white/80 hover:scale-105 hover:text-primary-600 transition-all duration-300 cursor-default dark:bg-gray-800/70 dark:border-gray-700/20 dark:text-gray-300 dark:hover:bg-gray-800/80 dark:hover:text-primary-400"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            whileHover={{
              y: -5,
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

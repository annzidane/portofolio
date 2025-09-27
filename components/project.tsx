"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-white/70 backdrop-blur-sm max-w-[44rem] border border-white/20 rounded-2xl overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-white/80 hover:shadow-xl transition-all duration-300 sm:group-even:pl-8 dark:text-white dark:bg-gray-800/70 dark:border-gray-700/20 dark:hover:bg-gray-800/80">
        <div className="pt-6 pb-8 px-6 sm:pl-12 sm:pr-2 sm:pt-12 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{title}</h3>
          <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
            {description}
          </p>
          <ul className="flex flex-wrap mt-6 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-primary-600 hover:bg-primary-700 px-4 py-2 text-[0.7rem] uppercase tracking-wider text-white rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-2xl shadow-xl border border-white/20
        transition-all duration-300
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}

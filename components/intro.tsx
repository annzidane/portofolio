"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[75rem] text-center sm:mb-0 scroll-mt-[100rem] relative"
    >
      {/* Subtle background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200/10 rounded-full blur-xl dark:bg-primary-800/5"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary-300/10 rounded-full blur-xl dark:bg-primary-700/5"></div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            className="relative"
          >
            {/* Simple ring around image */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full p-1">
              <div className="bg-white dark:bg-gray-900 rounded-full p-1">
                <Image
                  src="/zidane.jpg"
                  alt="zidane portrait"
                  width={256}
                  height={256}
                  quality={95}
                  priority={true}
                  className="h-32 w-32 rounded-full object-cover shadow-xl"
                />
              </div>
            </div>
            {/* Invisible image for proper sizing */}
            <Image
              src="/zidane.jpg"
              alt="zidane portrait"
              width={256}
              height={256}
              quality={95}
              priority={true}
              className="h-32 w-32 rounded-full object-cover opacity-0"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-2 right-2 text-4xl floating-animation"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-8 px-4 text-2xl font-medium !leading-[1.6] sm:text-4xl text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold text-primary-600 dark:text-primary-400">Halo, saya Zidane. </span> 
        Saya adalah seorang <span className="font-bold text-primary-700 dark:text-primary-400">Computer Science graduate</span> dari 
        <span className="font-bold text-primary-700 dark:text-primary-400"> Telkom University Purwokerto</span> dengan <span className="font-bold text-success-600 dark:text-success-400">GPA 3.87</span>. 
        Saya memiliki pengalaman profesional selama dua tahun di pengembangan <span className="font-semibold text-primary-600 dark:text-primary-400">full-stack</span>, 
        menggunakan <span className="font-semibold text-primary-600 dark:text-primary-400">Laravel</span> untuk backend dan <span className="font-semibold text-primary-600 dark:text-primary-400">Angular</span> untuk frontend. 
        Saya berfokus pada pembuatan aplikasi yang berkualitas, optimal, dan scalable, serta senang belajar teknologi baru untuk terus berkembang sebagai <span className="font-bold text-primary-600 dark:text-primary-400">Software Engineer</span>.

      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all duration-300 shadow-lg"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>

        <a
          className="group bg-white/70 backdrop-blur-sm hover:bg-white/80 text-gray-700 px-8 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all duration-300 cursor-pointer border border-white/20 shadow-lg dark:bg-gray-800/70 dark:text-gray-300 dark:border-gray-700/20 dark:hover:bg-gray-800/80"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition-transform duration-300" />
        </a>

        <a
          className="bg-white/70 backdrop-blur-sm hover:bg-white/80 p-4 text-gray-700 hover:text-primary-600 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all duration-300 cursor-pointer border border-white/20 shadow-lg dark:bg-gray-800/70 dark:text-gray-400 dark:border-gray-700/20 dark:hover:bg-gray-800/80 dark:hover:text-primary-400"
          href="https://www.linkedin.com/in/muhamad-aenun-zidane/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white/70 backdrop-blur-sm hover:bg-white/80 p-4 text-gray-700 hover:text-primary-600 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all duration-300 cursor-pointer border border-white/20 shadow-lg dark:bg-gray-800/70 dark:text-gray-400 dark:border-gray-700/20 dark:hover:bg-gray-800/80 dark:hover:text-primary-400"
          href="https://github.com/annzidane"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

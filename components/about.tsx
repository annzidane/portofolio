"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28 relative"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary-200/20 rounded-full blur-3xl dark:bg-primary-800/10"></div>
        <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-primary-300/20 rounded-full blur-3xl dark:bg-primary-700/10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary-100/10 to-primary-200/10 rounded-full blur-3xl dark:from-primary-900/5 dark:to-primary-800/5"></div>
      </div>

      <SectionHeading>About Me</SectionHeading>
      
      <motion.div 
        className="relative mt-6 group"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {/* Glass card with enhanced effects */}
        <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/40 overflow-hidden hover:shadow-3xl hover:border-white/50 transition-all duration-500 group-hover:bg-white/35 dark:bg-gray-800/30 dark:border-gray-700/40 dark:hover:border-gray-600/50 dark:group-hover:bg-gray-800/35">
          
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl group-hover:from-white/30 transition-all duration-500 dark:from-gray-700/10 dark:group-hover:from-gray-600/20"></div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer dark:via-gray-400/10"></div>
          </div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute top-4 left-4 w-2 h-2 bg-primary-400/40 rounded-full animate-pulse"></div>
            <div className="absolute top-12 right-8 w-1.5 h-1.5 bg-primary-500/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-8 left-8 w-1 h-1 bg-primary-300/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-primary-400/30 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-primary-200/60 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <motion.p 
              className="mt-3 text-xl font-bold text-primary-600 dark:text-primary-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Muhamad Aenun Zidane
            </motion.p>
            
            <motion.p 
              className="mb-6 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Saya adalah seorang <span className="font-semibold text-primary-600 dark:text-primary-400">Computer Science graduate</span> dengan dua tahun pengalaman profesional di bidang pengembangan web, mencakup proyek freelance, magang, hingga full-time. 
              Saya memiliki <span className="font-semibold text-primary-600 dark:text-primary-400">passion untuk terus belajar teknologi baru</span> dan berkembang sebagai Software Engineer yang serba bisa. 
              Berpengalaman dalam merancang, mengembangkan, dan mengoptimalkan aplikasi web yang berkualitas tinggi serta user-friendly, 
              sekaligus mampu bekerja sama secara efektif dalam tim. 
              Saya juga memiliki <span className="font-semibold text-primary-600 dark:text-primary-400">pemahaman dasar tentang prinsip keamanan siber</span> dan bersemangat untuk mengaplikasikan keahlian pengembangan saya pada proyek IT Security.
            </motion.p>

            <motion.p 
              className="mb-6 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Saat ini saya bekerja di <span className="font-semibold text-success-600 dark:text-success-400">Alturian Indonesia</span> sebagai <span className="font-semibold text-primary-600 dark:text-primary-400">Full-Stack Developer</span>, 
              merancang dan mengembangkan berbagai solusi enterprise untuk klien retail terkemuka guna mengoptimalkan operasi bisnis, supply chain, dan manajemen data. 
              Saya mengembangkan <span className="font-semibold text-primary-600 dark:text-primary-400">sistem manajemen retail komprehensif</span> (produk, stok, transaksi penjualan) dengan dashboard analytics, 
              membangun multiple enterprise solutions seperti <span className="font-semibold text-primary-600 dark:text-primary-400">E-Invoice, Forecasting, Master Data Management (MDM), dan Supplier Portal</span>. 
              Implementasi key features meliputi <span className="font-semibold text-primary-600 dark:text-primary-400">bulk CSV uploads, real-time status tracking, automated PDF generation, dan SAP integration</span>, 
              dengan menerapkan konsep <span className="font-semibold text-primary-600 dark:text-primary-400">microservices</span> untuk mengembangkan komponen modular dan scalable.
            </motion.p>

            <motion.p 
              className="text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span className="font-medium text-gray-600 dark:text-gray-400">Saat tidak sedang coding</span>, saya menikmati bermain video game, menonton film, mendengarkan musik, 
              dan <span className="font-semibold text-primary-600 dark:text-primary-400">mempelajari hal-hal baru</span>, termasuk bahasa pemrograman lain serta konsep arsitektur modern seperti <span className="font-semibold text-primary-600 dark:text-primary-400">microservices</span>. 
              Saya selalu terbuka untuk tantangan baru dan saat ini mencari <span className="font-semibold text-primary-600 dark:text-primary-400">posisi full-time sebagai Software Engineer </span> 
              untuk terus mengasah keterampilan saya dan berkontribusi pada proyek berdampak besar.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

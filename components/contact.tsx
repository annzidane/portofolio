"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.4);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,40rem)] text-center relative"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:bg-gray-800/70 dark:border-gray-700/20">
        <p className="text-gray-600 -mt-2 mb-8 dark:text-gray-300">
          Please contact me directly at{" "}
          <a 
            className="text-primary-600 hover:text-primary-700 underline underline-offset-2 font-medium transition-colors duration-300" 
            href="mailto:maenunzidane@gmail.com"
          >
            maenunzidane@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          className="flex flex-col space-y-4"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="h-14 px-6 rounded-xl bg-white/90 border border-gray-200 text-gray-700 placeholder-gray-400 focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all duration-300 dark:bg-gray-700/80 dark:border-gray-600/30 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:bg-gray-700 dark:focus:border-primary-400 dark:focus:ring-primary-800/20"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 px-6 py-4 rounded-xl bg-white/90 border border-gray-200 text-gray-700 placeholder-gray-400 focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all duration-300 resize-none dark:bg-gray-700/80 dark:border-gray-600/30 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:bg-gray-700 dark:focus:border-primary-400 dark:focus:ring-primary-800/20"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </div>
    </motion.section>
  );
}

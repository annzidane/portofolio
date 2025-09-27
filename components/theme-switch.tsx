"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white/70 w-[3.5rem] h-[3.5rem] backdrop-blur-md border border-white/20 shadow-xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all duration-300 text-primary-600 hover:text-primary-700 dark:bg-gray-800/70 dark:border-gray-700/20 dark:text-primary-400 dark:hover:text-primary-300"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun className="text-lg" /> : <BsMoon className="text-lg" />}
    </button>
  );
}

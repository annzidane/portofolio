import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-bold capitalize mb-8 text-center text-gray-900 dark:text-gray-100 relative">
      {children}
      {/* Decorative underline */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
    </h2>
  );
}

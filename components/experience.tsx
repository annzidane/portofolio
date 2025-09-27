"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" 
                    ? "rgba(255, 255, 255, 0.7)" 
                    : "rgba(31, 41, 55, 0.7)",
                backdropFilter: "blur(8px)",
                boxShadow: theme === "light" 
                  ? "0 4px 20px rgba(0, 0, 0, 0.08)" 
                  : "0 4px 20px rgba(0, 0, 0, 0.3)",
                border: theme === "light"
                  ? "1px solid rgba(255, 255, 255, 0.2)"
                  : "1px solid rgba(107, 114, 128, 0.2)",
                textAlign: "left",
                padding: "1.5rem 2rem",
                borderRadius: "1rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid rgba(59, 130, 246, 0.3)"
                    : "0.4rem solid rgba(107, 114, 128, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" 
                    ? "#0ea5e9" 
                    : "#0284c7",
                fontSize: "1.5rem",
                color: "white",
                boxShadow: theme === "light"
                  ? "0 4px 15px rgba(14, 165, 233, 0.2)"
                  : "0 4px 15px rgba(0, 0, 0, 0.4)",
              }}
            >
              <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-1">
                {item.title}
              </h3>
              <p className="font-semibold text-primary-600 dark:text-primary-400 !mt-0">
                {item.location}
              </p>
              <p className="!mt-3 !font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

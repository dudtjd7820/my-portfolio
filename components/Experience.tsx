"use client";

import { experiences } from "@/data/experience";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [expandedTechIds, setExpandedTechIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  const toggleTechExpand = (id: string) => {
    const newExpanded = new Set(expandedTechIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedTechIds(newExpanded);
  };

  return (
    <section id="experience" className="mb-6 sm:mb-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-200 dark:border-blue-700 flex items-center gap-2"
      >
        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
        Experience
      </motion.h2>

      <div className="space-y-4 sm:space-y-6">
        {experiences.map((exp, index) => {
          const isExpanded = expandedIds.has(exp.id);
          const isTechExpanded = expandedTechIds.has(exp.id);
          const visibleResponsibilities = isExpanded
            ? exp.responsibilities
            : exp.responsibilities.slice(0, 3);
          const hasMore = exp.responsibilities.length > 3;
          const visibleTechStack = isTechExpanded
            ? exp.techStack
            : exp.techStack.slice(0, 8);
          const hasMoreTech = exp.techStack.length > 8;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-5 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                    {exp.company}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-700 dark:text-blue-400 font-semibold">
                    {exp.position}
                  </p>
                </div>
                <div className="sm:text-right">
                  <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-bold">
                    {exp.period}
                  </p>
                  {exp.current && (
                    <span className="inline-block mt-1 px-2.5 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-xs font-black rounded-full">
                      재직중
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-900 dark:text-gray-100 mb-3 leading-relaxed font-semibold">
                {exp.description}
              </p>

              <div className="mb-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                <ul className="space-y-1.5 text-gray-900 dark:text-gray-100">
                  {visibleResponsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm leading-relaxed flex items-start font-medium">
                      <span className="mr-2 text-blue-600 dark:text-blue-400 font-bold">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {hasMore && (
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        <span>접기</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        <span>외 {exp.responsibilities.length - 3}개 업무 더보기</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {visibleTechStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-md shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
                {hasMoreTech && (
                  <button
                    onClick={() => toggleTechExpand(exp.id)}
                    className="px-2.5 py-1 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-xs font-semibold transition-colors"
                  >
                    {isTechExpanded ? "접기" : `+${exp.techStack.length - 8} 더보기`}
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

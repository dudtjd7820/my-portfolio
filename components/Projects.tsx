"use client";

import { projects } from "@/data/projects";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [expandedTechIds, setExpandedTechIds] = useState<Set<string>>(new Set());

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
    <section id="projects" className="mb-6 sm:mb-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-blue-200 dark:border-blue-700 flex items-center gap-2"
      >
        <FolderGit2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
        Projects
      </motion.h2>

      <div className="space-y-4">
        {projects.map((project, index) => {
          const isTechExpanded = expandedTechIds.has(project.id);
          const visibleTags = isTechExpanded
            ? project.tags
            : project.tags.slice(0, 8);
          const hasMoreTags = project.tags.length > 8;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-5 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.period && (
                    <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-bold mt-1">
                      {project.period}
                    </p>
                  )}
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white hover:bg-black dark:hover:bg-gray-600 text-xs font-bold rounded-lg transition-colors shadow-md"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">GitHub</span>
                      <span className="sm:hidden">Git</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-600 text-xs font-bold rounded-lg transition-colors shadow-md"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-gray-900 dark:text-gray-100 mb-3 leading-relaxed font-semibold">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {visibleTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-md shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
                {hasMoreTags && (
                  <button
                    onClick={() => toggleTechExpand(project.id)}
                    className="px-2.5 py-1 text-purple-700 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 text-xs font-semibold transition-colors"
                  >
                    {isTechExpanded ? "접기" : `+${project.tags.length - 8} 더보기`}
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

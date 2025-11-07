import { projects } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-gray-200">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all"
          >
            <div className="mb-3">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                {project.title}
              </h3>
              {project.period && (
                <p className="text-xs text-gray-500 mt-1">{project.period}</p>
              )}
            </div>

            <p className="text-sm text-gray-700 mb-4 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="px-2 py-0.5 text-gray-500 text-xs">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>

            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-900 text-xs font-medium"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-900 text-xs font-medium"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

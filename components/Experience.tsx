import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-gray-200">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Experience</h2>

      <div className="space-y-10">
        {experiences.map((exp) => (
          <div key={exp.id} className="group">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {exp.company}
                </h3>
                <p className="text-base text-gray-700 font-medium">{exp.position}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">{exp.period}</p>
                {exp.current && (
                  <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">
                    재직중
                  </span>
                )}
              </div>
            </div>

            <p className="text-sm text-gray-700 mb-3 leading-relaxed">{exp.description}</p>

            <div className="mb-3">
              <ul className="space-y-1 text-gray-600">
                {exp.responsibilities.slice(0, 5).map((resp, idx) => (
                  <li key={idx} className="text-sm leading-relaxed flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
                {exp.responsibilities.length > 5 && (
                  <li className="text-xs text-gray-500 italic">
                    외 {exp.responsibilities.length - 5}개 업무
                  </li>
                )}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {exp.techStack.slice(0, 10).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
              {exp.techStack.length > 10 && (
                <span className="px-2 py-0.5 text-gray-500 text-xs">
                  +{exp.techStack.length - 10}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

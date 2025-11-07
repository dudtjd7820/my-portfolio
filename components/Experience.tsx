import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-gray-200">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Work Experience</h2>

      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {exp.company}
                </h3>
                <p className="text-lg text-gray-700 font-medium">{exp.position}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">{exp.period}</p>
                <p className="text-sm text-gray-500">{exp.duration}</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-800 mb-2">주요 업무</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm leading-relaxed">{resp}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

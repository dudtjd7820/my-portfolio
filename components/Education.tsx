import { education } from "@/data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-gray-200">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Education & Training</h2>

      <div className="space-y-8">
        {education.map((edu) => (
          <div key={edu.id} className="group">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <GraduationCap className="w-6 h-6 text-gray-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{edu.institution}</h3>
                    <p className="text-lg text-gray-700 mt-1">
                      {edu.degree}
                      {edu.field && ` - ${edu.field}`}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{edu.period}</span>
                </div>

                {edu.description && (
                  <p className="text-gray-600 mb-3 leading-relaxed">{edu.description}</p>
                )}

                {edu.achievements && edu.achievements.length > 0 && (
                  <ul className="space-y-1 mt-3">
                    {edu.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-600 text-sm flex items-start">
                        <span className="mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

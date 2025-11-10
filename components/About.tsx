import { skillCategories } from "@/data/skills";
import { Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 flex items-center gap-3">
        <Code2 className="w-8 h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-400" />
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.category} className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600 pb-2">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

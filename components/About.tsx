import { skillCategories } from "@/data/skills";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-gray-200">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div key={category.category} className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-800">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200 transition-colors"
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

import { skillCategories } from "@/data/skills";
import { Code, Users, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-gray-200">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">About Me</h2>

      {/* Philosophy */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">개발 철학</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">안전성과 확장성을 갖춘 개발</h4>
              <p className="text-gray-700 leading-relaxed">
                안전성, 호환성, 유지보수성, 확장성을 갖춘 개발을 위해 어떤 기술을 사용해야 할지 끊임없이 고민합니다.
                기능적으로 더 개선할 수 있는 기술이 무엇인지 탐구하며, 최적의 솔루션을 찾기 위해 노력합니다.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">궁금증을 통한 성장</h4>
              <p className="text-gray-700 leading-relaxed">
                작은 질문, 이슈, 트렌드의 이유와 원인을 깊이 탐구하며 성장하는 개발자입니다.
                단순히 기능을 구현하는 것을 넘어, 왜 이렇게 작동하는지, 더 나은 방법은 없는지 고민합니다.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">협업과 의사소통</h4>
              <p className="text-gray-700 leading-relaxed">
                AI 기술의 발전으로 기술적 격차를 메울 수 있는 방법이 많아진 지금,
                협업과 의사소통, 그리고 함께 고민할 수 있는 역량이 더욱 중요해졌다고 생각합니다.
                동료들과 지식을 공유하고 함께 성장하는 것을 중요하게 여깁니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-3">
              <h4 className="text-xl font-semibold text-gray-800">{category.category}</h4>
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
      </div>
    </section>
  );
}
